# Loopback

## Prerequisites

Install node stable version

## Installation

To install the LoopBack CLI tool, enter this command

```
sudo npm install -g loopback-cli
```

To verify installation

```
lb -v
```

## Command line Options

| Command           | Description                                                                                              |
| ----------------- | -------------------------------------------------------------------------------------------------------- |
| lb                | Create a new LoopBack application.                                                                       |
| lb bluemix        | Add Bluemix deployment artifacts to a LoopBack application.                                              |
| lb datasource     | Add a new data source to a LoopBack application.                                                         |
| lb model          | Add a new model to a LoopBack application.                                                               |
| lb property       | Add a new property to an existing model.                                                                 |
| lb acl            | Add a new access control list (ACL) entry to the LoopBack application.                                   |
| lb relation       | Add a new model relationship.                                                                            |
| lb remote-method  | Add a new remote method..                                                                                |
| lb middleware     | Add a new middleware configuration.                                                                      |
| lb boot-script    | Add a new boot scripts.                                                                                  |
| lb export-api-def | Export Swagger API definition.                                                                           |
| lb swagger        | Generates a fully-functional application that provides APIs conforming to the Swagger 2.0 specification. |
| lb soap           | Generate application artifacts based on WSDL file.                                                       |

## Create REST API Server

```
lb
? Whats the name of your application : loopback-api
? Which version you will like to use : 3.X (Current)
? What kind of application do you have in mind : Empty Server
cd loopback-api
node .
```

## Database connectors

- Built-in memory connector - Acts like a database connector, in that it supports standard query and create, read, update, and delete (CRUD) operations. It is intended for local development and testing.
- Database connectors - Connect to relational and NoSQL databases,
- Other connectors - Connect to REST or SOAP APIs and other backend systems.
- Community connectors - Connectors created, maintained, and supported by the LoopBack open-source community.

### Database connectors

LoopBack database connectors implement create, retrieve, update, and delete operations as a common set of methods of PersistedModel. When you attach a model to a data source backed by one of the database connectors, the model automatically acquires the create, retrieve, update, and delete methods from PersistedModel. The data access methods on a persisted model are exposed to REST by default; see PersistedModel REST API for the endpoints.

You can connect models using relations to reflect relationships among data. For more information about relations, see Creating model relations.

- Cassandra connector
- Cloudant connector
- DashDB
- DB2 connector
- DB2 for iSeries connector
- DB2 for z/OS
- Informix connector
- MongoDB connector
- MySQL connector
- Oracle connector
- PostgreSQL connector
- Redis connector
- Redis key-value connector
- SQL Server connector
- SQLite3 connector

### Other Connector

The officially-supported non-database connectors are:

- Email connector
- JSON RPC connector
- MQ Light connector
- Push connector
- Remote connector
- REST connector
- SOAP connector
- Storage connector
- Swagger connector

#### Storage

Container API

| Description                                                        | Container Model Method                  | Method | Rest URL                                 |
| ------------------------------------------------------------------ | --------------------------------------- | ------ | ---------------------------------------- |
| List all containers                                                | getContainers(cb)                       | GET    | /api/containers                          |
| Get information about specified container                          | getContainers(cb)                       | GET    | /api/containers/:container               |
| Create a new container                                             | createContainers(cb)                    | POST   | /api/containers                          |
| Delete a specified container                                       | destroyContainer(container,cb)          | DELETE | /api/containers/:container               |
| List all files with specified container                            | getFiles(container,download,cb)         | GET    | /api/containers/:container/files         |
| Get information for a specified files within a specified container | getFile(container, file, cb)            | GET    | /api/containers/container/files/:file    |
| Delete a file within a given container                             | removeFile(conainer, file, cb)          | DELETE | /api/containers/:container/files/:file   |
| Upload one or more files to a specified container                  | upload(request, response, cb)           | POST   | /api/containers/:container/upload        |
| Download a file within a specified container                       | download(container, file, response, cb) | GET    | /api/containers/:container/download/File |

STEP 01

```bash
lb datasource
? Enter the datasource name : local-storage
? Select the connctor for local-storage : Other
? Enter the connectors module name : loopback-component-storage
? Install loopback-component-storage : Yes
```

#### Create Container

Container will be the model in loopback

STEP 02

```bash
lb model
? Enter the model Name : Container
? Select the Datasource to attach Container to : local-storage (loopback-component-storage)
? Exposed Container Via REST API : Yes
? Custom plural form (Used to build REST URL):
? Common model or Server only : common
```

#### Edit Datasource.json

STEP 03

```javascript
"local-storage" : {
"name" : "local-storage",
"connector" : "loopback-component-storage",
//add following lines manually
"provider":"filesystem",
"root":"./server/local-storage" //path of the folder
}
```

#### Create folder

SETP 04

```bash
mkdir /server/local-storage
```

### Community Connector

| DataSource         | Connector                    | Notes                                                                                                       |
| ------------------ | ---------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Apache CouchDB     | loopback-connector-couch     |                                                                                                             |
| Apache Kafka       | loopback-connector-kafka     | Provided as option by data source generator.                                                                |
| ArangoDB           | loopback-connector-arango    |                                                                                                             |
| Couchbase          | loopback-connector-couchbase | Example at loopback-example-couchbase                                                                       |
| Elasticsearch      | loopback-connector-es        |                                                                                                             |
| Fabric Composer    | loopback-connector-composer  | Enables integration with Blockchain applications that are built with Fabric Composer for Hyperledger Fabric |
| Firebase Firestore | loopback-connector-firestore |                                                                                                             |
| Mandrill           | lb-connector-mandrill        | Enables applications to send emails via Mandrill                                                            |
| Neo4j              | loopback-connector-neo4j     | Provided as option by data source generator. NOTE: This connector has known issues.                         |
| RavenDB            | loopback-connector-ravendb   |                                                                                                             |
| RethinkDB          | loopback-connector-rethinkdb |                                                                                                             |
| Riak               | loopback-connector-riak      |                                                                                                             |
| SAP HANA           | loopback-connector-saphana   | Provided as option by data source generator.                                                                |
| SQLite             | loopback-connector-sqlite    |                                                                                                             |
| Twilio             |                              |                                                                                                             |

## Define model relations

Individual models are easy to understand and work with. But in reality, models are often connected or related. When you build a real-world application with multiple models, you’ll typically need to define relations between models. For example:

A customer has many orders and each order is owned by a customer.
A user can be assigned to one or more roles and a role can have zero or more users.
A physician takes care of many patients through appointments. A patient can see many physicians too.
With connected models, LoopBack exposes as a set of APIs to interact with each of the model instances and query and filter the information based on the client’s needs.

### Relationship Types

- BelongsTo relations
- HasOne relations
- HasMany relations
- HasManyThrough relations
- HasAndBelongsToMany relations
- Polymorphic relations
- Embedded relations (embedsOne and embedsMany)

Use simple JSON declarative syntax to set up relations between models. For example, the following specifies that a lesson belongs to one category (identified by categoryId) and has one owner (identified by ownerId).<br>

### Lesson belongs to Section

```bash
$ lb relation
[?] Select the model to create the relationship from: Lesson
[?] Relation type: belongs to
[?] Choose a model to create a relationship with: Section
[?] Enter the property name for the relation: section
[?] Optionally enter a custom foreign key: categoryId
```

### Section has many Lesson

```bash
$ lb relation
[?] Select the model to create the relationship from: Section
[?] Relation type: has many
[?] Choose a model to create a relationship with: Lesson
[?] Enter the property name for the relation: Lessons
[?] Optionally enter a custom foreign key:
```

## Defining models

Use the LoopBack model generator to create a new model. In your application root directory, enter the command (for example, to create a “books” model):

```bash
lb model book
```

## Custom Endpoint / Remote Method

```bash
lb remote-method
? Select the model : Member
? Enter the remote method name : sayMyName
? Is Static? Yes
? Description for method : takes in a name and then says it.

Let's configure where to expose your new method in the public REST API.
You can provide multiple HTTP endpoints. enter an empty path when you
? Enter te path of this endpoint : /say-my-name/:myName
? HTTP verb : get

Let's add another endpoint. enter an empty name when done.
? Enter the path of this endpoint:

Describe the input("accepts") arguments of your remote method.
You can define multiple input arguments.
Enter an empty name when you've defined all input arguments.
? What is the name of this argument? : myName
? Select argument's type : string
? Is this argument required? Yes
? Please describe the argument : Name string of the person.
? Where to get the value from? : (auto)

Let's add another accept argument. enter an empty name when done.
? What is the name of this argument? :

Describe the output("returns") arguments to the remote method's callback function.
You can define multiple output arguments.
Enter an empty name when you've defined all output arguments.
? What is the name of this argument? : myResponse
? Select argument's type : object
? Is this argument a full respose body (root)? : No
? Please describe the argument : this is the response to the say my name thing

Let's add another return argument. Enter empty name when done.
? What is the name of this argument?:
```

This will generate the following code on console & update member.json file.
STEP 01 copy the following code

We added strong-remoting metadata for your new methods to common/model/ember.json
You must implement the method in common/models/member.js. For example:
Here is sample code to get you started:

```js
/**
 * takes in a name and then says it
 * @param {string} myName chuck in the name of the preson.
 * @param {Function(Error, object)} callback
 */

Member.sayMyName = fuction(myName, callback){
  var myResponse;
  //TODO
  callback(null, myResponse);
};

```

STEP 02 Paste it in /common/model/member.js

```js
'use strict';
module.exports = funciton(Member){
/**
 * takes in a name and then says it
 * @param {string} myName chuck in the name of the preson.
 * @param {Function(Error, object)} callback
 */

Member.sayMyName = fuction(myName, callback){
  var myResponse;
  //TODO
  // Your code goes here
  callback(null, myResponse);
};

};
```

## Defining middleware

### Overview

Middleware refers to functions executed when HTTP requests are made to REST endpoints. Since LoopBack is based on Express, LoopBack middleware is the same as Express middleware. However, LoopBack adds the concept of middleware phases, to clearly define the order in which middleware is called. Using phases helps to avoid ordering issues that can occur with standard Express middleware.

LoopBack supports the following types of middleware:

- Pre-processing middleware for custom application logic. See example of pre-processing middleware.
- Dynamic request handling middleware to serve dynamically-generated responses, for example HTML pages rendered from templates and JSON responses to REST API requests. See [example pending].
- Static middleware to serve static client-side assets. See example of static middleware.
- Error-handling middleware to deal with request errors. See example of error-handling middleware.
  STEP 01

```bash
lb middleware
? Ener the middleware name : counter
? Select the phase for counter : 5. routes
? Select the sub phase for counter : 1 before
Specify paths for counter:
Enter an empty path name when done.
? Path uri: /${restApiRoot}
Let's add another path.
Enter an empty path name when done.
? Path uri:
? Configuration parameters in JSONformat:{}
Middleware counter is added to phase routes.
```

SETP 2

```bash
$ mkdir /server/middleware
$ touch /server/middleware/counter.js
//counter.js
module.exports = function(){
  return function(req, res, next){
     console.log('inside middleware');
  }
}

//server/middleware.json
"routes:before":{
  "./middelware/counter":{
     "paths": [
         //"/x"
         "${restApiRoot}"
      ]
   }
}
```

## Hooks

Overview
LoopBack provides three kinds of hooks:

- Remote hooks, that execute before or after calling a remote method, either a custom remote method or a standard create, retrieve, update, and delete method inherited from PersistedModel. See PersistedModel REST API for information on how the Node methods correspond to REST operations.
- Operation hooks that execute when models perform create, retrieve, update, and delete operations. Operation hooks replace deprecated model hooks.
- Connector hooks that execute before requests to a data source connector or after the connector’s response.

A remote hook enables you to execute a function before or after a remote method is called by a client:

- beforeRemote() runs before the remote method.
- afterRemote() runs after the remote method has finished successfully.
- afterRemoteError() runs after the remote method has finished with an error.

### Remote Hooks

The following example defines beforeRemote and afterRemote hooks for the revEngine() remote method:

Context object
Remote hooks are provided with a Context ctx object that contains transport-specific data (for HTTP: req and res). The ctx object also has a set of consistent APIs across transports.

Applications that use loopback.rest() middleware provide the following additional ctx properties:

- ctx.req: Express Request object.
- ctx.res: Express Response object.

The context object passed to afterRemoteError() hooks has an additional property ctx.error set to the Error reported by the remote method.

Other properties:

- ctx.args - Object containing the HTTP request argument definitions. Uses the arg definition to find the value from the request. These are the input values to the remote method.
- ctx.result - An object keyed by the argument names. Exception: If the root property is true, then it’s the value of the argument that has root set to true.

common/models/member.js

```js
'use strict';
module.exports = function(Member) {
  //Example of remote
  Member.sayMyName = function(firstName, callback) {
    callback(null, firstName);
  };

  //Example of Before remote hook 2nd argument is dummy placeholder
  Member.beoreRemote('sayMyName', function(context, unused, next) {
    var args = JSON.stingify(context.args);
    console.log('Before sayMyName with args ' + args);
    next();
  });

  //Example of after remote hook
  Member.afterRemote('sayMyName', function(context, remoteMethodOutput, next) {
    /*
     * context.result.firstName and remoteMethodOutput.firstName both are same
     * context.result.firstName = 'Billi';
     * remoteMethodOutput.firstName = 'Kali Billi';
     * We can create new properties
     * remoteMethodOutput.lastName = 'xxx';
     */

    console.log('after the method');
    next();
  });
};
```

### Operational Hooks

Operation hooks are triggered by all methods that execute a particular high-level create, read, update, or delete operation.
common/models/member.js

```js
'use strict'
module.exports = function(Member){
  function updateOtherCollection(collectionName, whereCondition, newData){
  var app = required('../../server/server');
  var db = app.dataSources.db;
  var collection = db.connector.collection(collectionName);

  collection.update(
    whereCondition,
    { $set:
        newData
    },
    { multi : true }
  }
}
  Member.observe('after save',function(context, next){
    //isNewInstance return true if new record Created / Inserted
    //info is meta object for result
    if((context.isNewInstance ##= undefined) && (context.info.count > 0)){
      console.log('You need to update some collection');
      //console.log(context);
      var whereCondition = context.where;
      var newData = context.data;
      updateOtherCollection('Comment', whereCondition, newData);
      console.log('all is well');
    }
    next();
}
```

## Creating a Schema(Table) from Model

Create a file /server/boot/automigrate.js

```js
'use strict';
module.exports = function(app) {
  //drop and create table so data is lost
  //app.dataSources.mysql.automigrate()
  app.dataSources.mysql.autoupdate('TableName', err => {
    if (err) throw err;
    console.log('Model sync');
  });
};
```

## Authentication, authorization, and permissions

LoopBack includes built-in token-based authentication.Most applications need to control who (or what) can access data or call services. Typically, this involves requiring users to login to access protected data, or requiring authorization tokens for other applications to access protected data.

### Initial setup

#### Enabling access control

Applications created with the LoopBack application generator have access control enabled by default, except for the “empty-server” application type. To enable access control for an “empty-server” application, add a boot script that calls enableAuth().

Create a file server/boot/authentication.js

```js
module.exports = function enableAuthentication(server) {
  server.enableAuth();
};
```

#### Creating ACL

```bash
lb acl
? Select the model to apply the ACL entry to : (all existing model)
? Select the ACL scope : All methods and properties
? Select the access type : al(match all types)
? Select the role : Any unauthenticated user
? Select the permission to apply : Explicitly deny access
```

### Preparing access control models

You must configure the User model(s), (and possibly the AccessToken model) according to your set-up.

Edit server/model-config.json

```js
"ACL"{
  "datasource" : "mongodb"
  "public":false
},
"AccessToken"{
  "datasource" : "mongodb"
  "public":false
}
```
