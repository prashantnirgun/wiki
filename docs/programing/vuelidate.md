# Vuelidate

## validate immediately

To check immediately use

- To validate while typing v-model="v$.email.$model"
- Regular v-model="email"
- Use @blur event with @blur="v\$.email.touch()"
- If check for validation use :error="v$.email.$error" this will return true or false.
- use computed rules instead of validators in composition API
- To check all validator in form use v$.value.$touch()
- To check form has any validation use v$.value.$error
- To disable submit :disabled="v$.$invalid"
- To check has any error in forms v-if="v$.$anyError"

## Custom Validator with helper example

```html
<template>
  <q-form @submit.prevent.stop="doSubmit">
    <q-input
      outlined
      dense
      v-model="v$.email.$model"
      placeholder="Username"
      class="q-mb-md"
      :error="v$.email.$error"
      error-message="Invalid email"
    >
      <template v-slot:prepend>
        <q-icon name="person" color="primary" />
      </template>
      <template v-slot:append>
        <q-icon name="close" @click="email = ''" class="cursor-pointer" />
      </template>
    </q-input>
  </q-form>
</template>
```

```javascript
<script lang="ts">
import useVuelidate from "@vuelidate/core";
import { required, email, maxLength, helpers } from "@vuelidate/validators";
  import {defineCompnent, reactive, toRefs, computed} from 'vue';
  export default defineComponent({
	name: "SignIn",
  setup() {
    const state = reactive({
      email: null,
      password: null,
      rememberMe: false,
      isPassword: true,
    });

    const mustBeLearVue = (value) => value.includes("leanrvue");
    const rules = computed(() => ({
      email: {
        required,
        email,
        mustBeLearVue: helpers.withMessage("Must e learnvue", mustBeLearVue),
      },
      password: { required, maxLength: maxLength(18) },
    }));
    const v$ = useVuelidate(rules, state, { lazy: true });

    const doSubmit = () => {
      v$.value.$touch();
      console.log(v$.value.email.$errors[0].$message);
      if (!v$.value.$error) {
        console.log("validation complete");
      }
    };

    return {
      doSubmit,
      ...toRefs(state),
      v$,
    };
  },
});
</script>
```
