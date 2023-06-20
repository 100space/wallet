# 도메인에 해당하는 zone 정보 가져오기
data "aws_route53_zone" "my_site" {
  name = "${var.default_domain}."
}

# 도메인 지정
resource "aws_route53_record" "external_dns" {
  zone_id = data.aws_route53_zone.my_site.zone_id
  name    = var.default_domain
  type    = "A"

  alias {
    name                   = aws_lb.external.dns_name
    zone_id                = aws_lb.external.zone_id
    evaluate_target_health = true
  }
}

# 서브도메인 지정

## WWW 레코드
resource "aws_route53_record" "www_record" {
  depends_on = [aws_route53_record.external_dns]

  zone_id = data.aws_route53_zone.my_site.zone_id
  name    = "www.${var.default_domain}"
  type    = "CNAME"
  ttl     = 5
  records = [var.default_domain]
}

## API 레코드
resource "aws_route53_record" "api_record" {
  zone_id = data.aws_route53_zone.my_site.zone_id
  name    = "api.${var.default_domain}"
  type    = "A"

  alias {
    name                   = aws_lb.api.dns_name
    zone_id                = aws_lb.api.zone_id
    evaluate_target_health = true
  }
}

## TEST 서버 레코드
resource "aws_route53_record" "test_front_record" {
  zone_id = data.aws_route53_zone.my_site.zone_id
  name    = "front.${var.default_domain}"
  type    = "A"

  alias {
    name                   = aws_lb.external.dns_name
    zone_id                = aws_lb.external.zone_id
    evaluate_target_health = true
  }
}

resource "aws_route53_record" "test_back_record" {
  zone_id = data.aws_route53_zone.my_site.zone_id
  name    = "back.${var.default_domain}"
  type    = "A"

  alias {
    name                   = aws_lb.api.dns_name
    zone_id                = aws_lb.api.zone_id
    evaluate_target_health = true
  }
}