password="jH]iPha(hF04"
username="root"
Ip="162.241.69.248"
clear
echo "Current date : $(date) @ $(hostname)"
echo "Stage 1 => compressing file"
rm -rf wiki.zip
cd dist
zip -rq ../wiki.zip .
echo "Stage 2 Begin => Uploading file"

sshpass -p $password scp ../wiki.zip $username@$Ip:/var/www/vhosts/cloudapmc.com/wiki.cloudapmc.com/
echo "Stage 2 Complete => Uploading file"

echo "Stage 3 => Deploying Site"
sshpass -p $password ssh -t -t $username@$Ip << EOF
  cd /var/www/vhosts/cloudapmc.com/wiki.cloudapmc.com ;
  find . \! -name 'wiki.zip' -delete ;
  unzip -qq wiki.zip;
  ls -lh;  
EOF

echo "Process Completed"
