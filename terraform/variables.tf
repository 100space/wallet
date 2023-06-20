variable "project" {
  description = "project_name"
  default     = "wallet"
}

variable "region" {
  description = "region"
  default     = "ap-northeast-2"
}

variable "vpc_cidr" {
  description = "vpc_cidr"
  default     = "10.10.10.0/24"
}

variable "public_subnet" {
  description = "public_subnet"
  default = [
    "10.10.10.0/27",
    "10.10.10.32/27",
    "10.10.10.64/27",
    "10.10.10.96/27"
  ]
}

variable "private_subnet" {
  description = "private_subnet"
  default = [
    "10.10.10.128/27",
    "10.10.10.160/27",
    "10.10.10.192/27",
    "10.10.10.224/27"
  ]
}

variable "my_ec2_type" {
  description = "my_ec2_type"
  default     = "t2.micro"
}

variable "my_key_pair" {
  description = "my_key_pair"
  default     = "my-ec2-keypair"
}

variable "default_domain" {
  description = "default_domain"
}

variable "my_acm" {
  description = "my_acm"
}