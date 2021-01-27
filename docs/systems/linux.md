# Linux

## Commands

| Command                       | Description                                    |
| ----------------------------- | ---------------------------------------------- |
| uname -a                      | To find out 32 / 64 Bit Operating System       |
| rm -r /path                   | Delete Files or Directory use -r for recorsive |
| tar xzvf \<file Name\>        | Untar and decompress the file                  |
| ps aux \| grep mongo          | check mongodb is working or not                |
| tail ~/mongo/logs/mongodb.log | print files from bottom                        |
| mv foo bar                    | rename folder foo to bar                       |

## Creating Vitual Host

### Python Webserver

Python 2

```bash
python -m SimpleHTTPServer 8080
```

Python 3

```bash
python -m http.server 8080
```

### PHP Webserver

```bash
php -S localhost:8080
```

### Apache (Virtual Host)

| #   | Step                                                                |
| --- | ------------------------------------------------------------------- |
| 1   | Download repository from <https://github.com/RoverWire/virtualhost> |
| 2   | Apply permission to execute: \$ chmod +x /path/to/virtualhost.sh    |

#### Optional

if you want to use the script globally, then you need to copy the file to your /usr/local/bin directory, is better if you copy it without the .sh extension

```bash
sudo cp /path/to/virtualhost.sh /usr/local/bin/virtualhost|
```

### Basic Syntax

```bash
sudo sh /path/to/virtualhost.sh [create | delete][domain] [optional host_dir]
```

Example
to create a new virtual host:

```bash
sudo virtualhost create mysite.dev
```

to create a new virtual host with custom directory name:

```bash
sudo virtualhost create anothersite.dev my_dir
```

to delete a virtual host

```bash
sudo virtualhost delete mysite.dev
```

to delete a virtual host with custom directory name:

```bash
sudo virtualhost delete anothersite.dev my_dir
```

## Creating Shell Script

```bash
create a file save it path/xxx.sh
chomod +x path/xxx.sh
execute path/./xxx/sh

sudo cp path/xxx.sh /usr/local/bin/xxx
execute xxx
```

## robot.txt

<https://davidwalsh.name/robots-txt>

```bash
User-agent: *
Disallow: /
```

## Scripts

ftp to google drive : <http://olivermarshall.net/how-to-upload-a-file-to-google-drive-from-the-command-line/>

## SSH

```bash
ssh -p <port> username@example.com
```

## scp

```bash
# from local to remote
cp notice.doc root@domain:/home/jones

# from remote to local
scp root@domain:/home/jones/letter.doc .
```

## Nohup

```bash
nohup node my_app.js &
```

## Create User

adduser \<username\>

| command                       | Description                                             |
| ----------------------------- | ------------------------------------------------------- |
| adduser \<user\>              | Create User                                             |
| id \<user\>                   | Check user is created                                   |
| usermod -aG sudo \<user\>     | Add sudo permission to user                             |
| id \<user\>                   | Verify group is added                                   |
| su - \<user\>                 | Change login                                            |
| whoami                        | check login                                             |
| mkdir ~/.ssh                  | Create folder for ssh keys                              |
| chomod 700 ~/.shh             | Change permission not accessible to other user          |
| chomod 600 ~/.shh             | Remove writing permission                               |
| sudo nano /etc/ssh/ssh_config | Open ssh_config file to disable root login and password |
| PermitRootLogin no            | Change from yes to no                                   |
| PasswordAuthentication no     | remove # and change yes to no                           |
| sudo systemctl reload sshd    | reload the configuration                                |
| sudo ufw allow OpenSSH        | Firewall to open ssh port                               |
| sudo ufw allow http           | Firewall to open http port                              |
| sudo ufw allow https          | Firewall to open https port                             |
| sudo ufw enable               | Allow the ports to be enabled                           |
| sudo ufw statsu               | Will show Firewall status                               |
| sudo apt-get git              | Install git                                             |

## zsh

- [Cheatsheet](https://github.com/ohmyzsh/ohmyzsh/wiki/Cheatsheet)
- [Video](https://www.youtube.com/watch?v=su0h5StEZ6A&t=533s)
- [Docs](https://medium.com/@shivam1/make-your-terminal-beautiful-and-fast-with-zsh-shell-and-powerlevel10k-6484461c6efb)

## Alias

```bash
alias wr="cd ~/www"
alias wiki="cd ~/www/cloudapmc.com/wiki.tss.net.in"
alias family="cd ~/www/cloudapmc.com/nirgun.co.in"
alias ec="cd ~/www/cloudapmc.com/store.cloudapmc.com"
alias api="cd ~/www/cloudapmc.com/api.cloudapmc.com"
# alias ls -l="ls -lh"
```
