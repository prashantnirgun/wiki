# NPM

| Command                                      | Description                                                                                                                                   |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| npm init                                     | create a package.json file with interactive mode.                                                                                             |
| npm init --y                                 | create a package.json with default option silent mode.                                                                                        |
| npm config set init-author-name "prashant"   | default option for all projects                                                                                                               |
| npm config set init-licence "MIT"            |                                                                                                                                               |
| npm config get init-author-name "prashant"   | To know the values are set run get command.                                                                                                   |
| npm config delete init-licence               | To delete the default options.                                                                                                                |
| npm install \<package name\>                 | To install package locally                                                                                                                    |
| npm install \<package\> --save               | add dependency of that packages to your project                                                                                               |
| npm install \<package\> --save-dev           | install devDependancy project to your package                                                                                                 |
| npm install \<package\> --unsafe-perm        | This issue that I’m facing is that the permissions my current user has are unable to create the symlinks that are being asked by the program. |
| npm uninstall \<package\>                    | uninstall package                                                                                                                             |
| npm uninstall \<package\> --save             | Remove the dependancy                                                                                                                         |
| npm uninstall \<package\> --save-dev         | Remove dev dependancy                                                                                                                         |
| npm install \<package\> -g                   |                                                                                                                                               |
| npm uninstall \<package\>                    |                                                                                                                                               |
| npm uninstall \<package\> --global           |                                                                                                                                               |
| npm list                                     | local packages                                                                                                                                |
| npm list --global                            |                                                                                                                                               |
| npm list -g --depth 0                        | List global packages depth 0                                                                                                                  |
| sudo npm install --unsafe-perm -g strongloop | Error                                                                                                                                         |
| npm outdated                                 | List all out dated packagess                                                                                                                  |
| npm update                                   | Update all out dated packages                                                                                                                 |

## NVM

Node version Manager if you want to use different node version

### Installation

#### Download

```
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```

#### Update .bashrc or .zshrc

```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

#### Verify

```
command -v nvm
```

#### .nvrmrc

If the file is present then you can just use nvm use it will automatically load the correct version. Content of the file is as follows. To create the file

```
node -v > .nvmrc
```

| Command            | Explanation                                    |
| ------------------ | ---------------------------------------------- |
| nvm install node   | "node" is an alias for the latest version      |
| nvm install 16.0.0 | To install a specific version of node          |
| nvm ls-remote      | You can list available versions using          |
| nvm ls             | If you want to see what versions are installed |
| nvm use 16         | To use V16                                     |
| nvm use            | read .nvmrc and load the correct version       |

## Global Packages

```bash
sudo npm install -g feathers-cli
sudo npm install -g @quasar/cli
sudo npm install -g nodemon
sudo npm install -g @quasar/icongenie
```

## Scripts

| Syntax                                | Explanation                               |
| ------------------------------------- | ----------------------------------------- |
| "start:build" :"tsc -w"               | Start with tsc with watch mode            |
| "start:run" : "nodemon build/node.js" | Start nodemon                             |
| "start" : "concurrently npm:start:\*" | Start all process that has start: scripts |
