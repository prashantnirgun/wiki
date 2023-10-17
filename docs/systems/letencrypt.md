## Firewall
ufw enabled
ufw allow ssh
ufw allow http
ufw allow https
ufw status

## install certbot
sudo apt install certbot python3-certbot-nginx
sudo ufw status

## register email
certbot

## create certificate
certbot --nginx -d backend.io.in -d www.backend.io

## Set Timer
sudo systemctl status certbot.timer

## Dry Run Timer
sudo certbot renew --dry-run

## verify
certbot certificates 

## Links
- https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-20-04