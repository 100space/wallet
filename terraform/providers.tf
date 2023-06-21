terraform {
  # tfstate 파일 terraform 클라우드에 저장
  cloud {
    organization = "cloudcoke"

    workspaces {
      name = "wallet"
    }
  }

  # 프로바이저 지정
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.1"
    }
  }
}