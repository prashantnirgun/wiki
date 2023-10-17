#SSH

## create user

| command                                     | Explanation                                                     |
| ------------------------------------------- | --------------------------------------------------------------- |
| useradd -m -s /bin/bash pash && passwd pash | Create user and set password                                    |
| which sudo                                  | output /user/bin/sudo                                           |
| apt install sudo                            | if no ouput is shown then install sudo package                  |
| visudo                                      | find sudo group check the group name starting with %admin %sudo |
| usermod -aG sudo pash                       | add group to user                                               |
| groups pash                                 | erify user belongs to which group                               |
| su - pash                                   | verify it belongs to sudo group                                 |
| sudo apt update                             | Sudo command to test                                            |

## Client

### check client

```

ssh -v

```

### Key Gen

```

ssh-keygen -t ed25519 -f ~/.ssh/<filename> -C "TSS Office Desktop"
ssh-copy-id -i ~/.ssh/<filename>.pub <user>@<domain>

```

## Configure

```

nano ~/.ssh/config
Host office-desk
HostName <domain>
IdentityFile ~/.ssh/<filename>
User prashant

```

## Server

### check server

```

sudo systemctl status sshd

```

## Install if not found

```

sudo apt install openssh-server
sudo systemctl enable sshd

```

## Configure

```

sudo nano /etc/ssh/sshd_config
Port 24601
PasswordAuthentication no
PubkeyAuthentication yes
PermitRootLogin no
# allow user seprated by space
AllowUser pash
```

Save and exit

```

sudo systemctl restart sshd

```

## SCP

```
scp -i ~/.ssh/<filename>.pub <file-2-copy> <user>@<domain>:/home/<user>

```
