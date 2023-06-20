# 로드 밸런서
resource "aws_lb" "external" {
  name     = "${var.project}-lb-ext"
  subnets  = [aws_subnet.public_subnet[0].id, aws_subnet.public_subnet[1].id]
  internal = false

  security_groups = [
    aws_security_group.external_lb.id
  ]

  load_balancer_type = "application"

  tags = {
    Name = "${var.project}-lb-ext"
  }
}

resource "aws_lb" "api" {
  name     = "${var.project}-lb-api"
  subnets  = [aws_subnet.public_subnet[2].id, aws_subnet.public_subnet[3].id]
  internal = false

  security_groups = [
    aws_security_group.external_lb.id
  ]

  load_balancer_type = "application"

  tags = {
    Name = "${var.project}-lb-api"
  }
}

# 대상 그룹
resource "aws_lb_target_group" "external" {
  name     = "${var.project}-lb-tg-ext"
  port     = 80
  protocol = "HTTP"
  vpc_id   = aws_vpc.my_vpc.id

  health_check {
    port    = 80
    path    = "/"
    matcher = "200"
  }

  tags = {
    Name = "${var.project}-lb-tg-ext"
  }
}

resource "aws_lb_target_group" "api" {
  name     = "${var.project}-lb-tg-api"
  port     = 80
  protocol = "HTTP"
  vpc_id   = aws_vpc.my_vpc.id

  health_check {
    port    = 80
    path    = "/health"
    matcher = "200"
  }

  tags = {
    Name = "${var.project}-lb-tg-api"
  }
}

# 로드 밸런서 리스너
resource "aws_lb_listener" "external_443" {
  load_balancer_arn = aws_lb.external.arn
  port              = "443"
  protocol          = "HTTPS"

  # HTTPS를 위한 인증서
  ssl_policy      = "ELBSecurityPolicy-2016-08"
  certificate_arn = var.my_acm

  default_action {
    target_group_arn = aws_lb_target_group.external.arn
    type             = "forward"
  }
}

resource "aws_lb_listener" "external_80" {
  load_balancer_arn = aws_lb.external.arn
  port              = "80"
  protocol          = "HTTP"

  # 80 -> 443으로 리다이렉트
  default_action {
    type = "redirect"

    redirect {
      port        = "443"
      protocol    = "HTTPS"
      status_code = "HTTP_301"
    }
  }
}

resource "aws_lb_listener" "api_443" {
  load_balancer_arn = aws_lb.api.arn
  port              = "443"
  protocol          = "HTTPS"

  # HTTPS를 위한 인증서
  ssl_policy      = "ELBSecurityPolicy-2016-08"
  certificate_arn = var.my_acm

  default_action {
    target_group_arn = aws_lb_target_group.api.arn
    type             = "forward"
  }
}

resource "aws_lb_listener" "api_80" {
  load_balancer_arn = aws_lb.api.arn
  port              = "80"
  protocol          = "HTTP"

  # 80 -> 443으로 리다이렉트
  default_action {
    type = "redirect"

    redirect {
      port        = "443"
      protocol    = "HTTPS"
      status_code = "HTTP_301"
    }
  }
}

# test server

resource "aws_lb_target_group" "test_front" {
  name     = "${var.project}-lb-tg-test-front"
  port     = 80
  protocol = "HTTP"
  vpc_id   = aws_vpc.my_vpc.id

  health_check {
    port    = 80
    path    = "/"
    matcher = "200"
  }

  tags = {
    Name = "${var.project}-lb-tg-test-front"
  }
}

resource "aws_lb_listener_rule" "test_front" {
  listener_arn = aws_lb_listener.external_443.arn
  priority     = 100

  action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.test_front.arn
  }

  condition {
    host_header {
      values = ["front.${var.default_domain}"]
    }
  }
}

resource "aws_lb_target_group_attachment" "test_front" {
  target_group_arn = aws_lb_target_group.test_front.arn
  target_id        = aws_instance.test_front.id
  port             = 80
}

resource "aws_lb_target_group" "test_back" {
  name     = "${var.project}-lb-tg-test-back"
  port     = 80
  protocol = "HTTP"
  vpc_id   = aws_vpc.my_vpc.id

  health_check {
    port    = 80
    path    = "/health"
    matcher = "200"
  }

  tags = {
    Name = "${var.project}-lb-tg-test-back"
  }
}

resource "aws_lb_listener_rule" "test_back" {
  listener_arn = aws_lb_listener.api_443.arn
  priority     = 100

  action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.test_back.arn
  }

  condition {
    host_header {
      values = ["back.${var.default_domain}"]
    }
  }
}

resource "aws_lb_target_group_attachment" "test_back" {
  target_group_arn = aws_lb_target_group.test_back.arn
  target_id        = aws_instance.test_back.id
  port             = 80
}

