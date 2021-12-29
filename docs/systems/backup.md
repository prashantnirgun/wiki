# Backup

## Software

| Software   | OS      | Purpose                  |
| ---------- | ------- | ------------------------ |
| Soursetree | Windows | Git Client Mysql Scripts |
| sqlbak     | Both    | MySQL backup             |
| FileZilla  | Linux   | Upload folders to FPT    |

### Bat File

File : scr2zip.bat

```bash
@echo off

rem PATH "c:\Program Files (x86)\WinRAR\"
rem "(file.lst) List of Files to be back up"
rem "c:\src2zip code"
path "C:\Program Files\WinRAR\"
# path "C:\Program Files\7-Zip"
winrar.exe a %1_%date% @file.lst

# 7z.exe a %1_%date% @file.lst

echo all done!
```

File : file.lst

```
d:\tss\bin\bpp\*.pbl
d:\tss\bin\bpp\*.pbt
d:\tss\bin\bum\*.pbl
d:\tss\bin\bum\*.pbt
d:\tss\bin\bum\*.sql
d:\tss\bin\core\*.pbl
d:\tss\bin\core\*.pbt
d:\tss\bin\cheque\*.pbl
d:\tss\bin\cheque\*.pbt
d:\tss\bin\bum\*.pbl
d:\tss\bin\bum\*.pbt
d:\tss\bin\sms\*.pbl
d:\tss\bin\sms\*.pbt
d:\tss\bin\workspace\*.*
D:\tss\Bin\retail\*.pbt
D:\tss\Bin\retail\*.pbl
D:\tss\Bin\mandal\*.pbt
D:\tss\Bin\mandal\*.pbl
```

### Shell Script

## Folder

1. Virtual Machine & HDD
1. My-Desk
1. Share-Me
1. DSK
1. Pictures
1. Training Videos
1. Download
1. Document
1. Desktop
1. Workbench Profile
1. FileZilla Profile
1. PDF Printer Profile
1. Code Editors Settings

## Restore

- Browser Extensions : VueDev Tools, Json Formattter
