output "s3_name" {
  value = aws_s3_bucket.my_s3.id
}

output "front_code_deploy_name" {
  value = aws_codedeploy_app.front_code_deploy.name
}

output "front_code_deploy_group_name" {
  value = aws_codedeploy_deployment_group.front_code_deploy.deployment_group_name
}


output "back_code_deploy_name" {
  value = aws_codedeploy_app.back_code_deploy.name
}

output "back_code_deploy_group_name" {
  value = aws_codedeploy_deployment_group.back_code_deploy.deployment_group_name
}