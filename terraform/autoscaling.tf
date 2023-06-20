resource "aws_launch_template" "front" {
  name = "${var.project}-front-template"

  image_id      = data.aws_ami.ubuntu.id
  instance_type = var.my_ec2_type
  key_name      = var.my_key_pair

  network_interfaces {
    associate_public_ip_address = true
    security_groups             = [aws_security_group.ec2.id]
  }

  iam_instance_profile {
    name = aws_iam_instance_profile.ec2_code_deploy.name
  }

  user_data = filebase64("${path.module}/scripts/front.sh")
}

resource "aws_launch_template" "back" {
  name = "${var.project}-back-template"

  image_id      = data.aws_ami.ubuntu.id
  instance_type = var.my_ec2_type
  key_name      = var.my_key_pair

  network_interfaces {
    associate_public_ip_address = true
    security_groups             = [aws_security_group.ec2.id]
  }

  iam_instance_profile {
    name = aws_iam_instance_profile.ec2_code_deploy.name
  }

  user_data = filebase64("${path.module}/scripts/back.sh")
}

resource "aws_autoscaling_group" "front" {
  name             = "${var.project}-front-asg"
  min_size         = 1
  max_size         = 2
  desired_capacity = 2
  force_delete     = true

  launch_template {
    id = aws_launch_template.front.id
  }

  vpc_zone_identifier = [aws_subnet.public_subnet[0].id, aws_subnet.public_subnet[1].id]

  tag {
    key                 = "Name"
    value               = "${var.project}-front-asg"
    propagate_at_launch = true
  }

  tag {
    key                 = "Project"
    value               = "back-asg"
    propagate_at_launch = false
  }
}

resource "aws_autoscaling_group" "back" {
  name             = "${var.project}-back-asg"
  min_size         = 1
  max_size         = 2
  desired_capacity = 2
  force_delete     = true

  launch_template {
    id = aws_launch_template.back.id
  }

  vpc_zone_identifier = [aws_subnet.public_subnet[2].id, aws_subnet.public_subnet[3].id]

  tag {
    key                 = "Name"
    value               = "${var.project}-back-asg"
    propagate_at_launch = true
  }

  tag {
    key                 = "Project"
    value               = "back-asg"
    propagate_at_launch = false
  }
}

resource "aws_autoscaling_attachment" "front" {
  autoscaling_group_name = aws_autoscaling_group.front.id
  lb_target_group_arn    = aws_lb_target_group.external.arn
}

resource "aws_autoscaling_attachment" "back" {
  autoscaling_group_name = aws_autoscaling_group.back.id
  lb_target_group_arn    = aws_lb_target_group.api.arn
}
