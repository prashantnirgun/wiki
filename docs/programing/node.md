# Node.js

## Installation

```bash
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs

#incase you install nodejs on digitalocean use following
sudo ln -s "$(which nodejs)" /usr/bin/node
```

## Upgrade to latest

```bash
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
```

## Version

```bash
node -v
npm -v
```

## permisson

```bash
sudo chown -R $USER:www-data /var/www/
sudo chmod -R ug+rw /var/www/html/airport.local/public_html/uploads/aaiscrsoc/
```

## Download & Install NPM on shared hosting

```bash
cd ~
wget https://nodejs.org/dist/v8.9.4/node-v8.9.4-linux-x64.tar.xz
```

To extract the Node.js files, type the following command:

```bash
tar xvf node-v8.9.4-linux-x64.tar.xz
```

To rename the extracted folder to the more convenient nodejs name, type the following command:

```bash
mv node-v8.9.4-linux-x64.tar.xz nodejs
```

To install the node and npm binaries, type the following commands:

```bash
mkdir ~/bin
cp nodejs/bin/node ~/bin
cd ~/bin
ln -s ../nodejs/lib/node_modules/npm/bin/npm-cli.js npm
```

### Run in Background Mode

Run in Background mode : The & places the command in the background, and the nohup command ensures that the application continues running even if you log out of the current terminal session.

```bash
nohup npm start --production &
```

To stop a currently running Node.js application, type the following command:

```bash
pkill node
```

INTEGRATING A NODE.JS APPLICATION WITH THE WEB SERVER
Depending on the type of Node.js application you are running, you may want to be able to access it using a web browser. To do this, you need to select an unused port for the Node.js application to listen on, and then define server rewrite rules that redirect visitors to the application. The following steps demonstrate how to do this:

In a text editor, add the following lines to the .htaccess file in the /home/username/public_html directory, where username represents your account username:

```bash
RewriteEngine On
RewriteRule ^$ http://127.0.0.1:XXXXX/ [P,L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ http://127.0.0.1:XXXXX/$1 [P,L]
```
