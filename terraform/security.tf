# 보안 그룹 생성
resource "aws_security_group" "external_lb" {
  name        = "${var.project}-ext-lb-sg"
  description = "${var.project} external load balancer security group"
  vpc_id      = aws_vpc.my_vpc.id

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
    description = "external load balancer https port"
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
    description = "external load balancer http port"
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["10.10.10.0/24"]
    description = "internal outbound any traffic"
  }

  tags = {
    Name = "${var.project}-ext-lb-sg"
  }
}

resource "aws_security_group" "ec2" {
  name        = "${var.project}-ec2-sg"
  description = "${var.project} instance security group"
  vpc_id      = aws_vpc.my_vpc.id

  ingress {
    from_port = 80
    to_port   = 80
    protocol  = "tcp"

    # external load balancer의 source만 허용
    security_groups = [aws_security_group.external_lb.id]

    description = "port open for ${var.project}"
  }

  ingress {
    description = "SSH"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
    description = "internal outbound traffic"
  }

  tags = {
    Name = "${var.project}-ec2-sg"
  }
}

resource "aws_security_group" "nat_gateway" {
  name        = "${var.project}-nat-gateway-sg"
  description = "${var.project} NAT instance security group"
  vpc_id      = aws_vpc.my_vpc.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = [var.private_subnet[0]]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = [var.private_subnet[0]]
  }

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "${var.project}-nat-gateway-sg"
  }
}

resource "aws_security_group" "mongo_db_sg" {
  name = "${var.project}-mongo-db-sg"

  vpc_id = aws_vpc.my_vpc.id

  ingress {
    description = "ssh"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = [var.vpc_cidr]
  }

  ingress {
    description = "mongo_db"
    from_port   = 27017
    to_port     = 27017
    protocol    = "tcp"
    cidr_blocks = [var.vpc_cidr]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "${var.project}-mongo-db-sg"
  }
}