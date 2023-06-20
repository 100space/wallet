# ubuntu 이미지 지정
data "aws_ami" "ubuntu" {
  most_recent = true
  owners      = ["099720109477"]

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-20230517"]
  }
}

# nat 인스턴스 생성
resource "aws_instance" "nat_gateway" {
  ami                         = data.aws_ami.ubuntu.id
  instance_type               = var.my_ec2_type
  subnet_id                   = aws_subnet.public_subnet[0].id
  key_name                    = var.my_key_pair
  vpc_security_group_ids      = [aws_security_group.nat_gateway.id]
  associate_public_ip_address = true
  source_dest_check           = false

  user_data = file("${path.module}/scripts/nat_settings.sh")

  tags = {
    Name = "${var.project}-nat-gateway"
  }
}

# db 인스턴스 생성
resource "aws_instance" "db" {
  ami                    = data.aws_ami.ubuntu.id
  instance_type          = var.my_ec2_type
  subnet_id              = aws_subnet.private_subnet[0].id
  key_name               = var.my_key_pair
  vpc_security_group_ids = [aws_security_group.mongo_db_sg.id]

  tags = {
    Name = "${var.project}-db-server"
  }

  user_data = templatefile("${path.module}/scripts/mongodb.tftpl", { user_name = "cloudcoke", passwd = "1" })
}

# test 서버
resource "aws_instance" "test_front" {
  ami                         = data.aws_ami.ubuntu.id
  instance_type               = var.my_ec2_type
  subnet_id                   = aws_subnet.public_subnet[1].id
  key_name                    = var.my_key_pair
  vpc_security_group_ids      = [aws_security_group.ec2.id]
  associate_public_ip_address = true

  tags = {
    Name = "${var.project}-test-front-server"
  }

  user_data = file("${path.module}/scripts/front.sh")
}

resource "aws_instance" "test_back" {
  ami = data.aws_ami.ubuntu.id
  instance_type = var.my_ec2_type
  subnet_id = aws_subnet.public_subnet[2].id
  key_name = var.my_key_pair
  vpc_security_group_ids = [aws_security_group.ec2.id]
  associate_public_ip_address = true

  tags = {
    Name = "${var.project}-test-back-server"
  }

  user_data = file("${path.module}/scripts/back.sh")
}