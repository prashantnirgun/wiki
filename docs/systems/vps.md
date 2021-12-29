# VPS

## PM2

| Command                 | Task                                                                                  |
| ----------------------- | ------------------------------------------------------------------------------------- |
| sudo npm install pm2 -g | Installed as global                                                                   |
| sudo pm2 start hello.js | Run                                                                                   |
| sudo pm2 startup ubuntu | Autorun application on boot or crashes                                                |
| sudo pm2 list/ls/status | Status                                                                                |
| pm2 --name /<app_name/> | Specify an app name                                                                   |
| pm2 restart app_name    |                                                                                       |
| pm2 reload app_name     |                                                                                       |
| pm2 stop app_name       |                                                                                       |
| pm2 delete app_name     |                                                                                       |
| pm2 /<command/> all     | Instead of app_name we can use all/ID for commands like restart,reload, stop & delete |
| pm2 start npm -- start  | Run npm script put space after --                                                     |
| pm2 monit               | To view process Monitor                                                               |

## Plesk=>Github=>Bitbucket

| Step | Description                    | Where             | Command                                                                                                                                                                                                    |
| ---- | ------------------------------ | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 01   | Add Github repository          | api.cloudapmc.com | Go to Github Icon & Select option Remote Git hosting                                                                                                                                                       |
| 02   | Copy clone URL                 | bitbucket.com     | 01 Click clone Button<br>02 Select SSH instead of HTTPS<br>03 Copy the url                                                                                                                                 |
| 03   | Complete the remaining options | api.cloudapmc.com | 01 Paste the URL into Remote Git Repository<br>02 Select the Deployment ode : Automatic / Manual / No Deployment<br>03 Select document root for the website                                                |
| 04   | Copy Public Key                | api.cloudapmc.com | It will automatically display SSH Public Key copy the key                                                                                                                                                  |
| 05   | Adding Key                     | bitbucket.com     | 01 Go to Bitbucket Repository / Setting / Access Keys / Add Key<br>02 Label = domain<br>03 Key = ssh-rsa .....                                                                                             |
| 06   | Finished the task              | api.cloudapmc.com | 01 Click OK this will finished the task<br>02 Go to Gitrepository Setting copy ebhootk URL Note : <https://server.cloudapmc.com:8443....Note> : If the domain is not available please add A record for it. |
| 07   | Adding Webhook                 | bitbucket.com     | 01 Go To Bitbucket / Settings / Webhooks / Add Webhook<br>02 title : domain<br>03 url : <https://server.cloudapmc.com:8443>...<br>04 status : Active<br>05 keep rest option default<br>                    |

## General Settings

| Description                           | Command                                                    |
| ------------------------------------- | ---------------------------------------------------------- |
| Create alias for www-root             | <pre>vim ~/.bashrc</br>alias wr='cd /var/www/vhosts'</pre> |
| Check Open Ports                      | <pre>netstat -tulpn </br>grep LISTEN</pre>                 |
| Find out running process on Port      | <pre>netstat -plan</br>grep :5000</pre>                    |
| Kill Process running on specific port | kill \$(lsof -t -i :5000)                                  |
| check free & available memory         | free -h                                                    |

### Plex Setings : Enabled Gzip Response

Serve static files directly by nginx

```bash
ac3 avi bmp bz2 css cue dat doc docx dts eot exe flv gif gz htm html ico img iso jpeg jpg js mkv mp3 mp4 mpeg mpg ogg pdf png ppt pptx qt rar rm svg swf tar tgz ttf txt wav woff woff2 xls xlsx zip webp
```

Additional nginx directives

```bash
gzip on;
gzip_disable "MSIE [1-6]\\.(?!.\*SV1)";
gzip_proxied any;
gzip_comp_level 5;
gzip_types text/plain text/css application/javascript application/x-javascript text/xml application/xml application/rss+xml text/javascript image/x-icon image/bmp image/svg+xml;
gzip_vary on;
```

## SSL Certificate

copy cert.pem & privkey.pem to ssl folder of your application folder

```bash
cp /usr/local/psa/var/modules/letsencrypt/etc/live/[MyDomain]/privkey.pem .
cp /usr/local/psa/var/modules/letsencrypt/etc/live/[MyDomain]/cert.pem .
```

## Domain

### Change NS records

- In some cases you need to create child record and then add it to NS record.
- In some case you need to add IP = NS1,NS2 and then add it as NS record.

## Shell Script to deploy site

```bash
password="?"
username="?"
Ip="?"
clear
echo "Current date : $(date) @ $(hostname)"
echo "Stage 1 => compressing file"
rm -rf wiki.zip
cd dist
zip -rq ../wiki.zip .
echo "Stage 2 Begin => Uploading file"

sshpass -p $password scp ../wiki.zip $username@$Ip:/paht/
echo "Stage 2 Complete => Uploading file"

echo "Stage 3 => Deploying Site"
sshpass -p $password ssh -t -t $username@$Ip << EOF
  cd /path/;
  find . \! -name 'wiki.zip' -delete ;
  unzip -qq wiki.zip >/dev/null;
  ls -lh;
EOF

echo "Process Completed"
```
