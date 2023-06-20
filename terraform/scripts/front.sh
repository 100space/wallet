#!/bin/bash

# CodeDeploy Agent 설치
apt update
apt install ruby-full wget -y

cd /home/ubuntu
wget https://aws-codedeploy-ap-northeast-2.s3.ap-northeast-2.amazonaws.com/latest/install
chmod +x ./install
./install auto > /tmp/logfile

# nginx 설치
apt install nginx -y
systemctl enable nginx

NGINX_CONF="/etc/nginx/sites-available/default"

# nginx 설정
cp $NGINX_CONF $NGINX_CONF.bak

sed -i 's|root /var/www/html;|root /home/ubuntu/www/build;|g' $NGINX_CONF
sed -i 's|index index.html index.htm index.nginx-debian.html;|index index.html;|g' $NGINX_CONF
sed -i 's|try_files $uri $uri/ =404;|if ( !-e $request_filename ) {rewrite ^(.*)$ /index.html break;}|g' $NGINX_CONF

mkdir -p /home/ubuntu/www/build

# 테스트용 파일 생성
HOSTNAME=$(hostname -f)
echo "<h1>Hello World from $HOSTNAME</h1>" > /home/ubuntu/www/build/index.html

systemctl restart nginx

chown -R ubuntu: /home/ubuntu

