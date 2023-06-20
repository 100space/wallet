resource "random_string" "random" {
  length  = 8
  upper   = false
  special = false
}

resource "aws_s3_bucket" "my_s3" {
  bucket        = "${var.project}-code-deploy-bucket-${random_string.random.result}"
  force_destroy = true
}