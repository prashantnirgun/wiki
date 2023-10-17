# Knex.js

## package.json

```js
"scripts": {
    "make-migration": "npx knex migrate:make init --migrations-directory db/migrations",
    "dev": "npm run migrate && npm run seed & nodemon index.js",
    "seed": "npx knex seed:run --knexfile=./db/knexfile.js",
    "make-seed": "npx knex seed:make new-seed --knexfile ./db/knexfile.js",
    "migrate": "npx knex migrate:latest --knexfile ./db/knexfile.js",
    "down": "npx knex migrate:down --knexfile ./db/knexfile.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

## Commands

```bash
npm install knex --save
knex init
knex migrate:make migration_name
knex migrate:latest
knex migrate:rollback
knex migrate:list
knex migrate:up
knex migrate:up 001_migration_name.js
knex migrate:down
knex migrate:down 001_migration_name.js
knex seed:make seed_name
knex seed:runknex seed:run --specific=seed-filename.js --specific=another-seed-filename.js
```

## Controller :

```js
const personService = require("../service/person");

class PersonController {
  async createPerson(req, res) {
    try {
      const id = await personService.createPerson(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new PersonController();
```

## Links

- [Knex](https://github.com/productioncoder/knexjs-tutorial/blob/master/controller/person.js)
- [knex-Objections](https://github.com/productioncoder/objection-js-tutorial/blob/main/controller/user.js)
