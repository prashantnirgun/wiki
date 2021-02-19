# Feathers

- app.use : To registered services
- app.services : To use the services

## Installation

```bash
sudo npm install @feathersjs/cli -g
mkdir feathers-basics
cd feathers-basics
feathers generate app
```

## Services

```bash
feathers generate service
```

- What kind of service is it? NeDB
- What is the name of the service? todos
- Which path should the service be registered on? /todos
- What is the database connection string? nedb://../data
