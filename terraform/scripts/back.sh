#!/usr/bin/env bash

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
sed -i '74,91d' $NGINX_CONF
sed -i 's|root /var/www/html;||g' $NGINX_CONF
sed -i 's|index index.html index.htm index.nginx-debian.html;||g' $NGINX_CONF
sed -i 's|location / {|location / {\n\t\tproxy_set_header HOST $host;\n\t\tproxy_pass http://127.0.0.1:3000;\n\t\tproxy_redirect off;|' $NGINX_CONF
sed -i 's|try_files $uri $uri/ =404;||g' $NGINX_CONF

systemctl restart nginx

cat <<EOF >> /home/ubuntu/nodejs.sh
#!/usr/bin/env bash

# node lts 버전 설치
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
source ~/.nvm/nvm.sh
nvm install --lts

# npm 최신 버전 설치
npm install -g npm@latest

# pm2 설치
npm install pm2 -g

# 테스트 파일 다운로드 후 실행
mkdir /home/ubuntu/www && cd /home/ubuntu/www
curl -O https://raw.githubusercontent.com/cloudcoke/script/main/react_project_script/server.js
export HOSTNAME=$(hostname -f)
pm2 start server.js
EOF

su - ubuntu -c "bash /home/ubuntu/nodejs.sh"

# mongo DB client 설치
apt install gnupg -y
curl -fsSL https://pgp.mongodb.com/server-6.0.asc | \
   gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg \
   --dearmor
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-6.0.list
apt update
apt install -y mongodb-mongosh
