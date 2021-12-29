# Nuxt.js

## Register Services

01 create file in client/api/student-plan-subscriptions.js

```
const SERVICE_NAME = "student-plan-subscriptions";
import backend from "@/lib/backend";
export default axios => ({
  find(data) {
    return backend(axios, `${SERVICE_NAME}`).find(data);
  },
  create(data) {
    return backend(axios, SERVICE_NAME).create(data);
  },
  update(id, data) {
    return backend(axios, SERVICE_NAME).update(id, data);
  }
});

```

02 Register Service client/plugins/api.js

```
import StudentPlanSubscriptions from "@/api/student-plan-subscriptions.js";
export default (context, inject) => {
  //Intialize API factories
  const factories = {
    users: Users(context.$axios),
    studentPlanSubscriptions: StudentPlanSubscriptions(context.$axios),
   }
     inject("api", factories);
};

```

03 How to use in .vue files

```
let rsp = await this.$api.studentPlanSubscriptions.create(data);
```

