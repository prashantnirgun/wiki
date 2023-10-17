## Installation
sudo apt install nginx

## Create folder
sudo mkdir backendioin
sudo chown -R $USER:$USER /var/www/backendioin
sudo chmod -R 755 /var/www/backendioin

## Configure
sudo ln -s /etc/nginx/sites-available/backendioin /etc/nginx/sites-enabled/
nginx -t
sudo systemctl restart nginx


## Remove
rm /etc/nginx/sites-enabled/msg-api 

## Links
- https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04#step-5-%E2%80%93-setting-up-server-blocks-(recommended)