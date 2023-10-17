# Installation

## Features :

```bash
sudo npm install @feathersjs/cli -g
feathers --version
feathers generate app
npmx knex init config/
```

Select :
API
API with socket.io
Objections
MySQL
ESLint

## Serivces

```bash
feathers generate service
```

What Kind of Services is it? Objection

What is the name of the service? PlanRates

Which path should the service be registered on? /plan-rates

Does the service require authentication? Y

### Objections-Relations

|    Tables    |     Persons     | Animals                                                                                                                  |
| :----------: | :-------------: | :----------------------------------------------------------------------------------------------------------------------- |
|   Columns    |    id, name     | id, name, owner_id                                                                                                       |
|      ON      |   persons.id    | animals.owerner_id                                                                                                       |
|     Data     |      John       | Tomy, Shaun                                                                                                              |
|  Relations   |       1.n       | 1.1                                                                                                                      |
| Relationship | HasManyRelation | HasOneRelation                                                                                                           |
|  modelClass  |     Animals     | Person                                                                                                                   |
|     from     |   persons.id    | animals.ownerId                                                                                                          |
|      to      | animals.ownerId | persons.id                                                                                                               |
|              |                 | owner: { relation: Model.BelongsToOneRelation, modelClass: Person, join: { from: 'animals.ownerId', to: 'persons.id' } } |

How to create custom-services ?

Please refer country-rates

## Service

Service Method should always return Promise

```js
async find() {
    return Promise.resolve({ status: 200, user: "my name is bond" });
}
```

How to call services from other services : Please check Security first

```js
await this.app.service("user-profiles").create(data.user_profiles, params);
```

## Hooks (Middleware)

Hook should always return context.

```
async (context) => {
   console.log("error", context);
   return context;
}
```

## Migration

In some case you have to use npx, run from folder which you have knexfile.js.

```bash
knex migrate:make migration_name #default
or
npx knex migrate:make migration_name
npx knex migrate:up migration_name
npx knex migrate:down migration_name
//Call Migration
npx knex migrate:latest --env production
```

If you have async task then make sure both up & down functions are async

```js
exports.up = async function(knex) {};
```

## Seeds

If knex not work then try using npx, run from folder which you have knexfile.js

```bash
knex seed:make seed_name or npx knex seed:make seed_name
knex seed:run //run
knex seed:run --specific=02_plan_rates.js  //specific file
```

## Methods

| Http Methods       | Service Layer Method    | Description                   | Validation |
| ------------------ | ----------------------- | ----------------------------- | ---------- |
| GET /messages      | messages.find()         |                               |            |
| GET /messages/1    | messages.get(1)         |                               |            |
| POST /messages     | messages.create(data)   |                               |            |
| PUT /messages      | messages.update(1,data) | Required rows should be there | Yes        |
| PATCH /messages/1  | messages.patch(1,data)  | Only updated fields.          | No         |
| DELETE /messages/1 | messages.remove(1)      |                               |            |

### Examples

```
http://localhost:3031/countries?$select[]=name
localhost:3030/companies?$joinRelation=[states]&$select[]=*
```

### Git

```
git status
git add .
git commit -m "subscription created update method for student_plan_subscription.isactive to turn on/off"
git checkout development
git pull
git checkout feature/subscription
git merge development
git status
git
```

### Errors

MySQL

```
 cp ~/Downloads/myyslq.zip node_modules/knex/lib/dialects
```

### Queries

|                                                             |      |
| ----------------------------------------------------------- | ---- |
| /age-levels?age[$gte]=6&month[$gte]=3&$sort[age]=1&$limit=1 |      |
| /student-plan-subscriptions?controller=active-plan          |      |
| localhost:3030/companies?company_name[$like]=The%           |      |

### Params

| find         | create      | patch       |
| ------------ | ----------- | ----------- |
| params.query | params.user | params.user |

```
return UserProfiles.query()
.column("id", "name")
.where("user_id", params.query.user_id)
.withGraphFetched("[subjectLevel, subjectLevel.subjects]")
.modifyGraph("subjectLevel", (builder) => {
builder.column("level", "id");
})
.modifyGraph("subjectLevel.subjects", (builder) => {
builder.column("subjects.name");
});
```

```
await UserSubjectLevelModel.query()
.joinRelated("levels")
.where("user_profile_id", user_profile_id)
.select(
"user_subject_level.id",
"user_subject_level.level",
"user_subject_level.subject_id",
"user_subject_level.assessedAt",
"user_subject_level.lastJumpTestAt",
"levels.id as level_id"
);
```

Nested Insert : this will handle identity and relation

```js
const graph = await this.Model.query().insertGraph({
  ...users,
  userProfiles: [{ ...user_profiles }],
});
```
