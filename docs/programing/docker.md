# Docker

## Build

- docker ps #list of running container
- docker ps -a #list of all container
- docker start <name>
- docker build -t <image name> . #build image
- docker build -t <image name>:v1 . #build image with tag

## Container

### Create Container

- docker run --name <container name> -p 4000:4000 <image name>:v1 #tag is optional only for new instance
- docker run -it <container name> #Interactive mode with terminal -i -t
- docker run -d --rm <container name> #Remove container once is stop also with detached mode
- docker run --name <container name> --network <network name> #-p is not require as they are in same network. Use mongodb://host.docker.internal:27017/ instead mogodb://<container-name>:27017
- docker run --name <container name> -v data:/data/db #This will create a volume and store the data into that volume
- docker run --name <container name> -e MONGO_ROOT_NAME=root -e MONGO_ROOT_PASSWORD=tss #Environment variable

### Run Container

- docker start <container name> #To run existing container in detached mode
- docker start -a <container name> #To start container in attached mode
- docker start -a -i <container name> #To start container in attached & interactive mode
- docker stop <container name>
- docker rm <container name> #Delete container for multiple container seprate with space

## Images

- docker images #list all images
- docker image rm <image> #delete un used images
- docker rmi <image> #delete un used images
- docker image inspect <image> #To get information

## Volume

- docker run --name <image name> -p 4000:4000 -rm -v /home/prashant/www/folder:/api -v /app/node_modules <container name> #creating a volume and restricting node_modules folder to copy and persiss the folder
- rm remove the container once it is stop
- docker run --name <image name> -v absulute_path:/app #Bind folder with image
- docker run --name <iamge name> -v logs:/appp/logs #Create a named volume
- docker run --name <Image name> -v /app/node_modules #Annonnuomous protected volume

## Compose
create docker-compose.yaml

- docker-compose up -d
- docker-compose down 


- docker-compose up
- docker-compose down
- docker-compose down --rmi all -v #--rmi : Delete all container and images -v : volume also.

## Network

- docker network create <network-name>
- docker network ls

## Misc

- docker system prune #delete all images, container & volume
- docker cp <file/folder> <container name>:<folder name> #Copy files from host to container however you can copy from container to host too
- docker tag <old image name>:<tag> <new image name>:<tag> #Rename image but retain old image basically clone it

## Links

- [Docker](https://docs.docker.com/get-started/)
- [Net Ninja Docker](https://github.com/iamshaunjp/docker-crash-course)
