# SAMABA

## Install Samba

```
sudo apt update
sudo apt install samba
```

## Stop Samba daemon

### Check if it’s running:

```
sudo systemctl status smbd
```

### If it is, stop the daemon:

```
sudo systemctl stop smbd
```

## Back up Samba config file

```
sudo mv /etc/samba/smb.conf
```

## Create new Samba config file

```
sudo vim /etc/samba/smb.conf
```

### New file (change the items in bold accordingly):

```
[global]
server string = File Server
workgroup = LLTV
security = user
map to guest = Bad User
name resolve order = bcast host
include = /etc/samba/shares.conf
```

## Create Samba shares config file

```
sudo vim /etc/samba/shares.conf
```

### New file (change the items in bold accordingly):

```
[Public Files]
path = /share/public_files
force user = smbuser
force group = smbgroup
create mask = 0664
force create mode = 0664
directory mask = 0775
force directory mode = 0775
public = yes
writable = yes

[Protected Files]
path = /share/private_files
force user = smbuser
force group = smbgroup
create mask = 0664
force create mode = 0664
directory mask = 0775
force directory mode = 0775
public = yes
writable = no
```

## Create samba user and group

### Create group:

```
sudo groupadd --system smbgroup
```

### Create user:

```
sudo useradd --system --no-create-home --group smbgroup -s /bin/false smbuser
```

## Create shared directories

### Create directories:

```
sudo mkdir -p /share/public_files
sudo mkdir /share/private_files
```

### Change ownership/permissions:

```
sudo chown -R smbuser:smbgroup /share
sudo chmod -R g+w /share
```

## Links

- https://www.youtube.com/watch?v=7Q0mnAT1MRg
- https://www.learnlinux.tv/setting-up-simple-samba-file-shares/

```

```
