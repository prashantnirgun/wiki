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
