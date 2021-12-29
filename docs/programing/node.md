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

## Understanding module.exports and exports in Node.js

Node.js comes with a CommonJS format, the standard set of built-in modules that we can use in our code without having to install them. To do this, we need to require the module using the require keyword and assign the result to a variable. This can then be used to invoke any methods the module exposes.

## What’s the Difference Between module.exports and exports?

### Creating and Exporting a Module

```js
// user.js
const getName = () => {
  return "Jim";
};

exports.getName = getName;

//index.js
const user = require("./user");
console.log(`User: ${user.getName()}`);
```

### Exporting Multiple Methods and Values

```js
const getName = () => {
  return "Jim";
};

const getLocation = () => {
  return "Munich";
};

const dateOfBirth = "12.01.1982";

exports.getName = getName;
exports.getLocation = getLocation;
exports.dob = dateOfBirth;
```

### Variations in Syntax

```js
//user.js
exports.getName = () => {
  return "Jim";
};

exports.getLocation = () => {
  return "Munich";
};

exports.dob = "12.01.1982";
//index.js
const { getName, dob } = require("./user");
console.log(`${getName()} was born on ${dob}.`);
```

## Module.exports

The foo variable would be ignored.

```js
//user.js
exports.foo = "foo";
module.exports = {
  getName: () => {
    return "Jim";
  },

  getLocation: () => {
    return "Munich";
  },

  dob: "12.01.1982",
};

//index.js
const { getName, dob } = require("./user");
console.log(`${getName()} was born on ${dob}.`);

//OR
const User = require("./user");
console.log(`${User.getName()} was born on ${User.dob}.`);
```

## Class Example

```js
//user.js
class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  getUserStats() {
    return `
      Name: ${this.name}
      Age: ${this.age}
      Email: ${this.email}
    `;
  }
}

module.exports = User;

//index.js
const User = require("./user");
const jim = new User("Jim", 37, "jim@example.com");

console.log(jim.getUserStats());
```
