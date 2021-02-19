# Github

## Training

Git has two ways to track your reposition 01 Existing Local Project : git init 02 Existing Remote Project : git clone <https://github.com/prashantnirgun/billman> .

Lesson 1

Dev A git checkout master git fetch git merge origin/master git checkout -b branch_a giit add \<file\> git commit -m "Add customer feedback form" git fetch git push -u origin branch_a

Dev B git checkout master git fetch git merge origin/master git checkout -b branch_a origin/branch_a git log git commit -am "Changes made to customer feedback form" git fetch git push

Dev A git fetch git log -p branch_a..origin/branch_a git merge origin/branch_a git push

## Git Initialise

| #   | command                                            | Note                                                            |
| --- | -------------------------------------------------- | --------------------------------------------------------------- |
| 01  | git init                                           | Initialised git .                                               |
| 02  | git config --global user.email "\<Your Email\>"    | If you dont want to ask user name every time set it globally.   |
| 03  | git remote add origin <https://github.com/>        | You need to tell repository path from where the source.         |
| 04  | git pull origin master --allow-unrelated-histories | Fetch the repository from remote to local and merge with local. |
| 05  | ls -ali                                            | Linux command to check .git folder and downloaded files.        |
| 06  | copy / create files                                |                                                                 |
| 07  | git add .                                          | Added newly created or modified files to repository.            |
| 08  | git rm --cached .htaccess                          | If you want to ignore / track the files                         |
| 09  | git commit -m "message"                            | Commit the changes to repository                                |
| 10  | git push -u origin branch                          | Upload the from local to remote                                 |
| 11  | git branch development                             | Create a new Branch                                             |

## Note

| command       | Note                                                        |
| ------------- | ----------------------------------------------------------- |
| cat .git/HEAD | to find current branch HEAD always pointed to tip of branch |

## Configuration

| Usage                         | command                                     | Note |
| ----------------------------- | ------------------------------------------- | ---- |
| Set User Name                 | git config --global user.name "Your Name"   |      |
| Set Email                     | git config --global user.email "Your Email" |      |
| Set Colour                    | git config --global color.ui true           |      |
| Set Editor                    | git config --global core.editor "emacs"     |      |
| View All Configuration        | git config --list                           |      |
| View Particular Configuration | git config user.name                        |      |

## Alias

Double quote is optional only required if command has space

| Usage    | command                                                                                  |
| -------- | ---------------------------------------------------------------------------------------- |
| Status   | git config --global alias.st "status"                                                    |
| Checkout | git config --global alias.co "checkout"                                                  |
| Commit   | git config --global alias.ci "commit"                                                    |
| Branch   | git config --global alias.br "branch"                                                    |
| Diff     | git config --global alias.df "diff"                                                      |
| Log      | git config --global alias.logg "log --graph --decorate --oneline --abbreve-commit --all" |

## Gitignore

| command   | Note                    |
| --------- | ----------------------- |
| # comment | Comment line is Ignored |
| \*.txt    | All File Extension .txt |
|           | \*.mp4                  | not ignore (Include) |

## Ignore file

which is in repository but from staging index ie still leave the copy in repo but stop tracking the file

```bash
git rm --cached <file name>
```

## Initialise

To create a folder as git repository and tell git to track the files

```bash
git init
```

## Delete

To delete a folder as git repository

```bash
rm -rf .git
```

## Add files to local repository

| Usage         | command               | Note                                    |
| ------------- | --------------------- | --------------------------------------- |
| Add All Files | git add .             | To add all files from current directory |
| Add File      | git add \<file Name\> | To add files from current directory     |

## Commit

Note : Warning will get generated only if file size is greater than zero

| Usage                  | command                  | Note                              |
| ---------------------- | ------------------------ | --------------------------------- |
| Commit                 | git commit -m "\<msg\>"  | commit all files and set message. |
| Commit + Add All Files | git commit -am "\<msg\>" | commit all files and set message  |
| Display                | git show HEAD            | To view whats been changed        |

## Delete Files

Delete File from Repository

```bash
git rm <file name>
```

## Recover / Undo the Change from repository

| Usage                           | command                                                   | Note                                                                       |
| ------------------------------- | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| Remove File from current branch | git checkout -- \<file / directory name\>                 | "--" Is Not checking out of current branch. And push file to staging Index |
| Remove File from commit         | git checkout \<commit no 4 or 10 digit\> -- \<file name\> | from older commit                                                          |

## Remove file from Staging Index

```bash
git reset HEAD <file Name>
```

## View Logs

View Logs

| Usage        | command                                  | Note                                                                                      |
| ------------ | ---------------------------------------- | ----------------------------------------------------------------------------------------- |
| Default      | git log                                  | view log in one line                                                                      |
| One Line     | git log --oneline                        |                                                                                           |
| No of Commit | get log -n \<commit no you want to see\> |                                                                                           |
| Since        | git log --since="2016-11-14"             | Date from                                                                                 |
| After        | git log --after="2016-11-14"             | Date After                                                                                |
| Week         | git log --after="2 weeks ago"            | Can specify in Weeks                                                                      |
| Days After   | git log --after="3 days ago"             | Can Specify days after                                                                    |
| Before       | git log --before="2016-11-14"            | Before and since are same                                                                 |
| Until        | git log --until="2016-11-14"             | Until and after are same                                                                  |
| Author       | git log --author="Prashant"              |                                                                                           |
| Message      | git log --grep="Init"                    |                                                                                           |
| File Name    | git log c4b913e.. index.html             | to find commit related to particular file from range of commit last commit not is ignored |
| Difference   | git log -p c4b913e.. index.html          | To see the difference                                                                     |

## Difference

| Usage                | command                                       | Note                                                          |
| -------------------- | --------------------------------------------- | ------------------------------------------------------------- |
| Difference           | git diff                                      | return difference in working directory and repository         |
| Particular File      | git diff \<file name\>                        |                                                               |
| In Staging Index     | git diff --staged                             | return difference between working directory and staging index |
| Difference in Branch | git diff \<branch\>..\<branch\>               | Order of Branch doesnt matter                                 |
| Difference in Branch | git diff --color-words \<branch\>..\<branch\> | colour highlighted                                            |

View Branch

|Usage|command|Note|
| --\_ | --- | --- |
|Local|git branch|to view all branches in local repository|
|Remote|git branch -r|to view all branches in remote repository|
|Local + Remote|git branch -a|to view all branches in remote and local repository|

## Create Branch

| Usage                      | command                                                | Note                                                                                                                                                               |
| -------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Create                     | git branch \<new_feature\>                             | No spaces only letter number and underscore. Remember it will create from where your HEAD is                                                                       |
| Create + Checkout          | git checkout -b \<new_feature\>                        | To create new branch and switch to it                                                                                                                              |
| Create branch Non Tracking | git branch \<non_tracking\> \<alias\>/\<non_tracking\> | To create changes to non tracking branch.Branch that we are not maintaining and <\br>now we need to read or make changes to code ie bringing from origin to local. |
| Sub Branch                 | git checkout -b development master                     | To Create a sub branch                                                                                                                                             |

## Change / Checkout Branch

| Usage           | command                                                             | Note                      |
| --------------- | ------------------------------------------------------------------- | ------------------------- |
| Checkout Local  | git checkout \<branch_name\>                                        | to move out to new branch |
| Checkout Remote | git checkout \<local branch name\> \<alias\>/\<remote branch name\> | To checkout remote branch |

## Delete Branch

| Usage          | command                                     | Note                                                                                                                                          |
| -------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Delete Local   | git branch -d \<branch name\>               | make sure you check out of the branch in safe mode.                                                                                           |
| Delete Local   | git branch --delete \<branch name\>         | Yet another option                                                                                                                            |
| Forceful Local | git branch -D \<branch name\>               | Hard Delete irrespective of you commited or not. Warning will be raised </br>if any commit are made to branch. In such case use Force Delete. |
| Delete Remote  | git push \<alias\> :\<branch name\>         | 01 Delete branch from remote server. But it will not delete branch from local server. This is an older method.                                |
| Delete Remote  | git push \<alias\> --delete \<branch name\> | 02 Delete branch from remote and local server. This is a newer method                                                                         |
| Delete Remote  | git branch -d remotes/origin/bugfix         | Not try out but check                                                                                                                         |

## Merge Branch

1. You need to checkout (a) to receiver branch. Eg. branch a1 needs to be merge into a.
1. merged branch (a1) will be there after merge. Now both the branch are same check with diff command.
1. You need to manually delete branch if you want.
1. Two type of Merge Fast Forward and real Merge.

| Usage | command                   | Note                                                                                                                             |
| ----- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Merge | git merge \<branch name\> | Sign-out of the branch which you want to merge first Make sure you have clean branch (Not having any uncommitted, index entries) |
| Info  | git branch --merged       | To View which all branch are merge.                                                                                              |

## Rename Branch

| Usage  | command                                                  | Note                            |
| ------ | -------------------------------------------------------- | ------------------------------- |
| Rename | git branch -m \<old brach name\> \<new branch name\>     | Rename Branch using shorthand   |
| Rename | git branch --move \<old brach name\> \<new branch name\> | Rename Branch using full syntax |

## Remote

| Usage                            | command                                                            | Note                                                                |
| -------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------- |
| Display Remote                   | git remote                                                         | display all remote                                                  |
| Verbose                          | git remote -v                                                      | List of fetch and push server. In some cases it could be different. |
| Add to Configuration             | git remote add \<alias mostly named origin\> <https://github.com/> |                                                                     |
| Remove remote from Configuration | git remote -r \<alias\>                                            |                                                                     |

## Push to Server

A new branch with no commit ie no files added will not get reflected to server. Tracking Branch we or other member keep track of the updates made to branch.

| Usage                | command                          | Note                                                                                                                                                                                            |
| -------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Push & track Changes | git push -u \<alias\> \<branch\> | u is important to track in future changes on remote repository by other if it is a tracking branch (ie -u used previously) then you could use. Alias if will be origin if not named separately. |
| Push                 | git push                         | Shortcut if only one remote repository                                                                                                                                                          |

## Clone Repository

directory is optional if you want to create in your own directory name.

```bash
git clone <https://github.com/> <directory>
```

## Fetch from server

| #   | command                      | Note                                                                                                                              |
| --- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| 1   | git fetch \<alias\>          | \<alias\> is optional if it is only one.Alias will be origin if not set other. get fetch will fetch repository from remote server |
| 2   | git merge \<origine/master\> | Merge in fetched changes                                                                                                          |

## Pull from server

| Usage | command  | Note                                         |
| ----- | -------- | -------------------------------------------- |
| Pull  | git pull | Pull command does two steps ie fetch & merge |

### ZSH Alias [CheatSheet](https://github.com/ohmyzsh/ohmyzsh/wiki/Cheatsheet)

- g : git
- ga : git add
- gaa : git add all
- gcm : git checkout \<master\>
- gcam : git commit -a -m
- gco : git checkout
- gl : git pull
- gp : git push
- gm : git merege
