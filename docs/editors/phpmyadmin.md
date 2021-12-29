## PHPMyAdmin

rename from config.default.php to config.inc.php

### Authentication Section

```bash
$cfg['Servers'][$i]['auth_type'] = 'cookie';
$cfg['Servers'][$i]['auth_type'] = 'config';
```

### Server parameters

```bash
$cfg['Servers'][$i]['host'] = 'localhost';
$cfg['Servers'][$i]['connect_type'] = 'tcp';
$cfg['Servers'][$i]['compress'] = false;
$cfg['Servers'][$i]['AllowNoPassword'] = false;
$cfg['Servers'][$i]['user'] = 'username';
$cfg['Servers'][$i]['password'] = 'password';
```
