# Uncomplicated Firewall

configuration file : /etc/default/ufw

## Commands

| Command                      | Explanation                                      |
| ---------------------------- | ------------------------------------------------ |
| ufw status                   | list all rules                                   |
| ufw status numbered          | list all rules with line no                      |
| ufw enable                   | Firewall is active                               |
| ufw disable                  | Firewall is active                               |
| ufw reset                    | Reset Rules(disable before apply this)           |
| ufw default deny incoming    | Default is incoming deny                         |
| ufw default allow outgoing   | Default is allow outgoing                        |
| ufw allow ssh                | Allow ssh                                        |
| ufw allow http               | Allow HTTP services                              |
| ufw allow https              | Allow HTTPS services                             |
| ufw allow ftp                | Allow FTP Services                               |
| ufw allow Samba              | Allow Samba Services                             |
| ufw allow from <IP>          | Allow any incomming connection from specified IP |
| ufw allow from <IP> to 22    | Allow SSH from specified IP                      |
| ufw allow from <IP>/24 to 22 | Allow SSH from specified IP Subnet               |
| ufw allow 21465              | Allow Port 21465                                 |
| ufw delete 5                 | Delete rule 5                                    |
| ufw deny ftp                 | Deny FTP                                         |
| ufw deny from <IP>           | Deny connection from particular IP               |

## Check service

```
sudo systemctl status ufw
sudo systemctl start ufw
```

## Rules

```
sudo ufw reset
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw allow http
sudo ufw allow https
sudo ufw allow ftp
```
