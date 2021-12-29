# Kick Start Project

## welfare.tss.net.in

### 01 Config

- src/config/
  1. [tableColumn.js](#tablecolumn-js)
  1. [optionValues.js](#optionvalues-js)
  1. [menu.json](#menu-json)

### 02 Modules

- src/store/modules/
  1. member.js
  1. settings.js
- src/store/
  1. [index.js](#store-index-js)

### 03 Components

- src/components/member
  1. MemberList.vue
  1. MemberCreate.vue
  1. MemberUpdate.vue
  1. MemberSearch.vue
  1. MemberTable.vue

### 04 Routes

- src/router
  1. [routes.js](#routes-js)

## api.cloudapmc.com

### 01 Models

- src/models/welfare/
  1. table.js
  1. view.js

### 02 Routes

- src/routes/welfare
  1. common_crud.js
  1. dashboard.js
  1. email.js
  1. user.js
  1. index.js
- src/routes/
  1. api.js

#### tableColumn.js

```js{7-14}
const accounts = require("./accountColumns");
const security = require("./securityColumns");

module.exports = {
  ...accounts,
  ...security,
  premises_unit: [
    {
      name: "premises_unit_name",
      label: "Unit Name",
      field: "premises_unit_name",
      align: "left",
      visible: true,
    },
  ],
};
```

#### optionValues.js

```js
export const yesNoOptions = [
  {
    label: "Yes",
    value: "Y",
  },
  {
    label: "No",
    value: "N",
  },
];
```

#### menu.json

```
{
    "label": "Member",
    "icon": "people",
    "to": "/member",
    "level": 1
}
```

#### routes.js

```js
{
    path: "member",
    meta: { requiresAuth: true },
    component: () => import("components/member/MemberList.vue"),
},

```

#### store/index.js

```js{3,6,16,18}
import Vue from "vue";
import Vuex from "vuex";
import member from "./modules/member";

const dataState = new createPersistedState({
  paths: ["memebr"],
  storage: {
    getItem: (key) => LocalStorage.getItem(key),
    setItem: (key, value) => LocalStorage.set(key, value),
    removeItem: (key) => LocalStorage.remove(key),
  },
});

//export default function (/* { ssrContext } */) {
const Store = new Vuex.Store({
  plugins: [dataState],
  state: {},
  modules: { member },
});
```

## Rules

| Table              | Front End  | API Server |
| ------------------ | ---------- | ---------- |
| Use \_ as seprated | Camle Case | CamelCase  |
|                    | Validation |            |
| Name singluar      | Singular   | Singlar    |
