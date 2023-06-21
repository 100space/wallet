# 준비할 것

- aws iam 계정
- aws cli (configure가 완료된 상태)
- route 53에 도메인 등록
- acm으로 인증서 발급
- terraform cloud 회원 가입 및 organization 생성
- terraform login

# 변수 설정

`terraform.tfvars` 파일 생성

```bash
default_domain = "your.domain"
my_acm         = "your acm arn"
```

# 실행

```bash
terraform init
```

```bash
terraform apply
```

# AWS S3 파일 업로드 테스트

- front

```bash
aws s3 cp codeDeploy_test-main.zip s3://$(terraform output -raw s3_name)/codeDeploy.zip
```

- back

```bash
aws s3 cp codeDeploy_test_back-main.zip s3://$(terraform output -raw s3_name)/codeDeploy_back.zip
```

# AWS CodeDeploy 배포 테스트

- front

```bash
aws deploy create-deployment --application-name $(terraform output -raw front_code_deploy_name) --deployment-group-name $(terraform output -raw front_code_deploy_group_name) --region ap-northeast-2 --s3-location bucket=$(terraform output -raw s3_name),bundleType=zip,key=codeDeploy.zip
```

- back

```bash
aws deploy create-deployment --application-name $(terraform output -raw back_code_deploy_name) --deployment-group-name $(terraform output -raw back_code_deploy_group_name) --region ap-northeast-2 --s3-location bucket=$(terraform output -raw s3_name),bundleType=zip,key=codeDeploy_back.zip
```
