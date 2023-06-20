# 사용가능한 가용영역 가져오기
data "aws_ec2_instance_type_offerings" "available" {
  filter {
    name   = "instance-type"
    values = [var.my_ec2_type]
  }

  location_type = "availability-zone"
}

# VPC 생성
resource "aws_vpc" "my_vpc" {
  cidr_block           = var.vpc_cidr
  enable_dns_hostnames = true

  tags = {
    Name = "${var.project}-vpc-${var.region}"
  }
}

# Internet Gateway : VPC 내부와 외부 인터넷이 통신하기 위한 게이트웨이
# Internet Gateway 생성
resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.my_vpc.id

  tags = {
    Name = "${var.project}-igw-${var.region}"
  }
}

# Subnet : VPC 내에서 나눠진 독립적인 네트워크 구역
# Public Subnet 생성
resource "aws_subnet" "public_subnet" {
  count             = length(var.public_subnet)
  vpc_id            = aws_vpc.my_vpc.id
  cidr_block        = var.public_subnet[count.index]
  availability_zone = count.index % 2 == 0 ? data.aws_ec2_instance_type_offerings.available.locations[0] : data.aws_ec2_instance_type_offerings.available.locations[1]

  tags = {
    Name = "${var.project}-public_subnet-${count.index}"
  }
}

# Private Subnet 생성
resource "aws_subnet" "private_subnet" {
  count             = length(var.private_subnet)
  vpc_id            = aws_vpc.my_vpc.id
  cidr_block        = var.private_subnet[count.index]
  availability_zone = count.index % 2 == 0 ? data.aws_ec2_instance_type_offerings.available.locations[0] : data.aws_ec2_instance_type_offerings.available.locations[1]

  tags = {
    Name = "${var.project}-private_subnet-${count.index}"
  }
}
# 라우팅 테이블 생성
resource "aws_route_table" "public_route_table" {
  vpc_id = aws_vpc.my_vpc.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.igw.id
  }

  tags = {
    Name = "${var.project}-public-route-table"
  }
}

resource "aws_route_table" "private_route_table" {
  vpc_id = aws_vpc.my_vpc.id

  route {
    cidr_block           = "0.0.0.0/0"
    network_interface_id = aws_instance.nat_gateway.primary_network_interface_id
  }

  tags = {
    Name = "${var.project}-private-route-table"
  }
}

# Public Subnet에 라우팅 테이블 지정
resource "aws_route_table_association" "public_route_table_association" {
  count          = length(var.public_subnet)
  subnet_id      = aws_subnet.public_subnet[count.index].id
  route_table_id = aws_route_table.public_route_table.id
}

# Private Subnet에 라우팅 테이블 지정
resource "aws_route_table_association" "private_route_table_association" {
  count          = length(var.private_subnet)
  subnet_id      = aws_subnet.private_subnet[count.index].id
  route_table_id = aws_route_table.private_route_table.id
}


# nat gateWay Elastic IP 지정
resource "aws_eip" "nat_gateway_eip" {
  instance = aws_instance.nat_gateway.id
  domain   = "vpc"
}