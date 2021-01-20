# Vue

## Options

| Command            | Description          |
| ------------------ | -------------------- |
| v-on:input=""      | Keyboard Input event |
| v-on:click=""      | Click Event          |
| v-on:click.once="" | Run click event once |

## Data Binding

Data binding using v-model

```javascript
<input type="text" v-model="name" />;

data(): {
  return { name: '' };
}
```

## Mouse Events

v-on:click
here is the list [more info](https://www.w3schools.com/tags/ref_eventattributes.asp)

- click
- dblclick
- mousedown
- mousemove
- mouseout
- mouseover
- moueup

## Keybaord Events

v-on:keydown
here is list [more info](https://www.w3schools.com/tags/ref_eventattributes.asp).

- keydown
- keypress
- up

## Directive

Directives are prefixed with v- to indicate that they are special attributes provided by Vue, and as you may have guessed, they apply special reactive behavior to the rendered DOM.

## Event Modifiers

Here we are doing extra other than DOM Event so its called event modifiers.<br>

```javascript
v-on:click.once="xx" //fire click event once
```

here is list of options available [more info](https://vuejs.org/v2/guide/events.html#Method-Event-Handlers|Documentation).

- stop
- prevent
- capture
- self
- once

## Key Modifiers

```javascript
v-on:keyup.enter="xx"
v-on:keyup.alt.enter="xx"
```

here is list of options available [more info](https://vuejs.org/v2/guide/events.html#Method-Event-Handlers|Documentation).

- .enter
- .tab
- .delete (captures both “Delete” and “Backspace” keys)
- .esc
- .space
- .up
- .down
- .left
- .right

## Methods

1. Method calling parenthesis '()' is optional.
1. Used when you need to pass argument to function.
1. Must used parenthesis when you are using in string interpolation.
1. Trigger automatically whenever any changes are made.

```html
<buton v-on:click="message" >Add a Year</button>
```

```javascript
new Vue({
  el : '#app',
  data : {messgae = "This is a message for you"},
  methods : {
      message(){ return this.message;
      }
  }
});
```

## Computed Property

computed property only change when the values used in the function changes. We don't need to use () to call properties.

## Component

Component is a re usable piece of code or template that can be use in different vue instances. Important data is a function and not the object reason is components are used in multiple places and if we changed data in one of the instances of the component it has not to update all instances data. It has to maintain its data per instance that is reason it is function not an object.

We can style to the specific component otherwise it will be added in header and will be applicable to all dom element to prevent this use scoped.

```html
<div id="app">
  <app-user></app-user>
</div>
```

```javascript
//Globally
Vue.component('app-user', {
  data: function() {
    return {
      users: [{ username: 'A' }, { username: 'A' }, { username: 'A' }]
    };
  },
  template:
    '<div><div class="user" v-for="user in users"><p>{{ user.username }}</p></div></div>'
});

//Locally
import Input from './input.vue';

new Vue({
  el: '#app',
  data: {},
  components: {
    'app-user': Input
  }
});
```

## Dynamic Component

You can use the same mount point and dynamically switch between multiple components using the reserved <component> element and dynamically bind to its is attribute:

```html
<template>
  <div>
    <!-- this tag retain the data otherwise component will be created each time you 
    load the component-->
    <keep-alive>
      <!-- <component is="component"></component> -->
      <component v-bind:is="component"></component>
    </keep-alive>
    <button v-on:click="component = 'form-one'">Show form one</button>
    <button v-on:click="component = 'form-two'">Show form two</button>
  </div>
</template>
```

```javascript
import formOne from './components/formOne.vue';
import formTwo from './components/formTwo.vue';
export default {
  components: {
    'form-one': formOne,
    'form-two': formTwo
  },
  data() {
    return {
      component: 'form-one'
    };
  }
};
```

## Slot

Slot allows you to pass on html to the components.

File : App.vue

```html
<template>
  <div>
    //Defining the slot name
    <div slot="form-header">
      <h3>This is the title of a form</h3>
      <p>This is some info about the form</p>
    </div>
    <div slot="form-fields">
      <input type="text" placeholder="name" required />
      <input type="password" placeholder="password" required />
    </div>
  </div>
</template>
```

```javascript
import formHelper from './components/formHelper.vue';
export default {
  components: {
    'form-helper': formHelper
  },
  data() {
    return {};
  }
};
```

File : formhelper.vue

```html
<template>
  <div>
    <div id="form-header">
      <slot name="form-header"></slot>
    </div>
    <div id="form-fields">
      <slot name="form-fields"></slot>
    </div>
  </div>
</template>
```

## Ref

ref is used to register a reference to an element or a child component. The reference will be registered under the parent component’s \$refs object. If used on a plain DOM element, the reference will be that element; if used on a child component, the reference will be component instance:

```html
<div id="vue-app-one">
  <input type="text" ref="input" />
  <button v-on:click="readRefs">Submit</button>
  <p>{{ output }}</p>
</div>
```

```javascript
new Vue({
  el: '#vue-app-one',
  data: {
    output: 'Your favourite food'
  },
  methods: {
    readRefs: function() {
      console.log(this.$refs);
      this.output = this.$refs.input.value;
    }
  }
});
```

## Vue Version

```bash
vue --vesion
```

## Vue Cli Installation

```bash
npm install vue-cli -g
vue init webpack-simple <folder Name>
cd <folder Name>
npm install
npm run dev
```

ES6 spread support

1 install

```bash
npm install --save -dev babel-preset-stage-2
```

2 edit babelrc file

```javascript
{
  "presets": [
    ["env", {
      "modules": false
    }],
    "stage-2"
  ],
  "plugins": ["transform-runtime"],
  "env": {
    "test": {
      "presets": ["env", "stage-2"]    }
  }
}
```

## Two Way Binding

Two way binding can be done using following ways.

```javascript
v-bind:value="..."
v-on:input="..."
v-model="..."
```

## Props

Passing Data with Props : Every component instance has its own isolated scope. This means you cannot (and should not) directly reference parent data in a child component’s template. Data can be passed down to child components using props.

A prop is a custom attribute for passing information from parent components. A child component needs to explicitly declare the props it expects to receive using the props option:

File : Message.vue

```html
<template>
<div>
<h1>{{ message }}</h1>
<!-- here msg variable will be created in child component & binding (Passing) value to it from data. If it is not binded then it
will considered it as string. -->
<app-input :msg="message"></app-input>
<div>
</template>
```

```javascript
import Input from './Input.vue';

export default {
  data() {
    return { message: 'This is a great message' };
  },
  components: {
    'app-input': Input
  }
};
```

File : Input.vue

```html
<template>
  <div>
    <input type="text" :value="msg">
  <div>
</template>
```

```javascript
//Two ways of doing this
// 01 Name of the variable used in parent component.
props : ['msg'],
// 02 Name of the variable used in parent component.
props : {
          msg: {
                  type : String, // Array
                  required : true
                }
        },
data(){
        return { message : '' }
      }
```

## Events

File : Message.vue

```html
<template>
  <div>
    <h1>{{ message }}</h1>
    <app-input :msg="message" @messageChanged="message = $event"></app-input>
  <div>
</template>
```

```javascript
import Input from './Input.vue';

export default {
  data() {
    return { message: 'This is a great message' };
  },
  components: {
    'app-input': Input
  }
};
```

File : Input.vue

```html
<template>
  <div>
    <input type="text" :value="msg" @input="changeMesage">
  <div>
</template>
```

```javascript
import Input from './Input.vue';

export default {
  props: ['msg'],
  data() {
    return { message: '' };
  },
  methods: {
    changeMesage(event) {
      this.message = event.target.value;
      this.emit('messageChanged', this.message);
    }
  }
};
```

## Http Request

In order to make http request we need to install package vue resource. [https://www.npmjs.com/package/vue-resource|npm]

```bash
yarn add vue-resource
npm install vue-resource --save
```

File : index.js

```javascript
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

// Use vue-resource package
Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
```

File : component/blog.vue

```javscript
methods: {
        post: function(){
            this.$http.post('http://jsonplaceholder.typicode.com/posts', {
                title: this.blog.title,
                body: this.blog.content,
                userId: 1
            }).then(function(data){
                console.log(data);
                this.submitted = true;
            });
        }
    }
```

## Filters Global / Local

### Global Filter

File : index.js

```javascript
import DateFilter from './filters/date';

Vue.filter('to-uppercase', function(value) {
  return value.toUpperCase();
});

Vue.filter('date', DateFilter);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

File : blog.vue

```html
<template>
  <div id="show-blogs">
    <h2>{{ blog.title | to-uppercase }}</h2>
  </div>
</template>
```

### Local Filter

File : blog.vue

```html
<template>
  <div id="show-blogs">
    <h2>{{ blog.title | to-uppercase }}</h2>
  </div>
</template>
```

```javascript
export default {
  filters: {
    /*'to-uppercase': function(value){
            return value.toUpperCase();
        }*/
    //use Camel case will automatically add - to it and no explicit function declaration is required
    toUppercase(value) {
      return value.toUpperCase();
    }
  }
};
```

File : src/filters/date.js

```javascript
export default value => {
  const date = new Date(value);
  return date.toLocaleString(['en-US'], {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  });
};
```

## Mixin

Mixins are a flexible way to distribute reusable functionalities for Vue components. A mixin object can contain any component options. When a component uses a mixin, all options in the mixin will be “mixed” into the component’s own options. Please refer[Repository](https://github.com/iamshaunjp/vuejs-playlist/tree/lesson-38/src) OR [video](https://www.youtube.com/watch?v=yzuml1y9bmq&list=pl4cuxegkcc9gqcygjhboeqh7wiayznrya&index=38)

File : mixin/searchMixin.js

```javascript
export default {
  computed: {
    filteredBlogs: function() {
      return this.blogs.filter(blog => {
        return blog.title.match(this.search);
      });
    }
  }
};
```

File : component/listBlog.vue

```javascript
import searchMixin from '../mixins/searchMixin';

export default {
  created() {
    this.$http
      .get('http://jsonplaceholder.typicode.com/posts')
      .then(function(data) {
        this.blogs = data.body.slice(0, 10);
      });
  },
  mixins: [searchMixin]
};
```

## Router

Creating a Single-page Application with Vue + Vue Router is dead simple. With Vue.js, we are already composing our application with components. When adding vue-router to the mix, all we need to do is map our components to the routes and let vue-router know where to render them. Here's a basic example:

Installation :

```bash
npm install vue-router --save
```

File : index.js

```javascript
import VueRouter from 'vue-router'
import Routes from './routes'

// Use packages
Vue.use(VueRouter);

// Register routes
const router = new VueRouter({
    routes: Routes,
    //default is mode : 'hash'
    mode : 'history
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
```

File : app.js

```html
<template>
  <div>
    <router-view></router-view>
  </div>
</template>
```

File : routes.js

```javascript
import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';

export default [
  { path: '/', component: showBlogs },
  { path: '/add', component: addBlog }
];
```

### Adding a router link

File : header.vue

```html
<template>
  <nav>
    <ul>
      <!-- use of extra will exactly match the url for active class -->
      <li><router-link to="/" exact>Blog</router-link></li>
      <li><router-link to="/add" exact>Add a new blog</router-link></li>
    </ul>
  </nav>
</template>
```

File : app.vue

```html
<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>
```

```javascript
import header from './components/header.vue';
```

### Router Parameter

#### Example 01

File : components/singleBlog.vue

```javascript
export default {
  data() {
    return {
      // id is initialised with url parameter
      id: this.$route.params.id,
      blog: {}
    };
  }
};
```

File : components/showBlogs.vue

```html
<template>
  <div id="show-blogs">
    //Anchor tag is created first and values bind as string to create it dynamic
    values
    <router-link v-bind:to="'/blog/' + blog.id"
      ><h2>{{ blog.title }}</h2></router-link
    >
  </div>
</template>
```

#### Example 02

File : router.js

```javascript
routes: [
  {
    //path: '/user/:id?' if id is optional
    path: '/user/:id',
    name: 'user',
    component: User,
    props: true
  }
];
```

File : User.vue

```html
<template>
  <h1>Showing event #{{ id }}</h1>
</template>
```

```javascript
export default {
  props: ['id']
};
```

#### Example 03

File : router.js

```javascript
routes: [{ path: '/user/:id', name: 'user', component: User, props: true }];
```

File : User.vue

```html
<template>
  <h1>Showing event #{{ $routes.params.id }}</h1>
</template>
```

### Router Push

```javascript
this.$router.push({
  name: 'event-show',
  params: { id: this.event.id }
});
```

### Reload Page

Reload a component when the URL changes, including query parameters

```javascript
<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
  </div>
</template>
```

## Vuex

Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion. It also integrates with Vue's official devtools extension to provide advanced features such as zero-config time-travel debugging and state snapshot export / import.

### Example

USE CDN : <https://unpkg.com/vuex>

OR

```bash
install vuex --save
```

File : index.js

```javascript
import Vue from 'vue';
import App from './App.vue';
import { store } from './store/store';

new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
});
```

File : store/store.js

```javascript
import Vue from 'vue';
import Vuex from 'vuex';
//Adding a middleware / Plugin
Vue.use(Vuex);

//Exporting Object as store
export const store = new Vuex.Store({
  //Not allowed to change state directly force to use actions, mutations to change state
  strict: true,
  state: {
    products: [
      { name: 'Banana Skin', price: 20 },
      { name: 'Shiny Star', price: 40 },
      { name: 'Green Shells', price: 60 },
      { name: 'Red Shells', price: 80 }
    ]
  }
});
```

Exmaple 01 Direct use of Store in template Note : (Do not use this.$store.state.products use $store.state products)

File : components/ProductListOne.vue

```html
<template>
 <div>
    <ul>
      <li v-for="product in products>{{product.name}}</li>
    </ul>
 </div>
</template>
```

Exmaple 02 Use of Store in template Note : (Use this.$store.state.products Do not use $store.state products)

File : components/ProductListOne.vue

```javascript
export default {
  computed: {
    products() {
      return this.$store.state.products;
    }
  }
};
```

Exmaple 03 use MapState

File : components/ProductListOne.vue

```javascript
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      products
    })
  }
};
```

Exmaple 04 MapState Named Object

File : components/ProductListOne.vue

```javascript
export default {
  computed: {
    ...mapState({
      products: state => state.products
    })
  }
};
```

Exmaple 05 MapState Array

File : components/ProductListOne.vue

```javascript
import { mapState } from 'vuex';
export default {
    computed: ...mapState(['products',''])
    }
}
```

### Getters

Vuex allows us to define "getters" in the store. You can think of them as computed properties for stores. Like computed properties, a getter's result is cached based on its dependencies, and will only re-evaluate when some of its dependencies have changed.

File : store/store.js

```javascript
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [
      { name: 'Banana Skin', price: 20 },
      { name: 'Shiny Star', price: 40 },
      { name: 'Green Shells', price: 60 },
      { name: 'Red Shells', price: 80 }
    ]
  },
  getters: {
    saleProducts: state => {
      var saleProducts = state.products.map(product => {
        return {
          name: '**' + product.name + '**',
          price: product.price / 2
        };
      });
      return saleProducts;
    }
  }
});
```

File : components/ProductListOne.vue

```javascript
export default {
  computed: {
    saleProducts() {
      return this.$store.getters.saleProducts;
    }
  }
};
```

### Mutations

The only way to actually change state in a Vuex store is by committing a mutation. Vuex mutations are very similar to events: each mutation has a string type and a handler. The handler function is where we perform actual state modifications, and it will receive. the state as the first argument: (Note : Mutation user capital to differentiate between MUTATION and actions). Mutations are synchronous.

File : store/store.js

```javascript
export const store = new Vuex.Store({
  //Prevent changing state outside store Important feature
  strict: true,
  state: {
    products: [
      { name: 'Banana Skin', price: 20 },
      { name: 'Shiny Star', price: 40 },
      { name: 'Green Shells', price: 60 },
      { name: 'Red Shells', price: 80 }
    ]
  },
  mutations: {
    REDUCE_PRICE: state => {
      state.products.forEach(product => {
        product.price -= 1;
      });
    }
  }
});
```

File : components/ProductListOne.vue

```javascript
export default {
  methods: {
    reducePrice: function() {
      this.$store.commit('REDUCE_PRICE');
    }
  }
};
```

### Actions

Actions are similar to mutations, the differences being that:

- Instead of mutating the state, actions commit mutations.
- Actions can contain arbitrary asynchronous operations.

File : store/store.js

```javascript
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  mutations: {
    REDUCE_PRICE: (state, payload) => {
      state.products.forEach(product => {
        product.price -= payload;
      });
    }
  },
  actions: {
    reducePrice: (context, payload) => {
      setTimeout(function() {
        // reach out for data
        context.commit('REDUCE_PRICE', payload);
      }, 2000);
    }
  }
});
```

File : components/ProductListOne.vue

```javascript
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
    ...mapGetters(['saleProducts'])
  },
  methods: {
    ...mapActions(['reducePrice'])
  }
};
```

### Name Space & Modules

directory structure

```
src
  |-store
      |-state.js
      |-modules
          |-user.js
</pre>
```

File : src/store/modules/store.js

```javascript
import * as user from '@/store/modules/user.js

Vue.use(Vuex)

export default new vuex.store({
  modules : { user, ...}

})
```

File : src/store/modules/user.js

```javascript
export const namespaced = true

export const state = {
 user : {id : '123', name : 'prashant'
}
//Note : No comma seprations
export const mutations = {}
export const actions = {}
export const getters = {}
```

File : src/views/EventList.vue

```javascript
export default {
  import { mapState, mapActions } from vuex
  created(){
    this.$store.dispatch('event/createEvent', payload)
  },
  methods(){
    //...mapActions(<namespace>,[<name of action>])
    ...mapActions('event',['fetchEvent'])
  }
}
```

### Root State

Calling / Accessing other state, mutation, actions by using rootState. rtootState is base state inside your store.js
File : store/module/event.js calling state

```javascript
...
export const actions = {
  //rtootState is base state inside your store.js
  createEvent({commit, rootState},payload){
    console.log('User creation event is ' + rootState.user.user.name)
  }
}
```

File : store/module/event.js calling actions

```javascript
...
export const actions = {
  //dispatch actions are on global name space
  createEvent({commit, dispatch, rootState},payload){
    console.log('User creation event is ' + rootState.user.user.name)
    dispatch('actionToCall')
  }
}
```

### Persistant State

01 You need to add npm module

```bash
npm install --save vuex-persistedstate
```

02 File /src/store/store.js

```javascript
import createPersistedState from 'vuex-persistedstate';

const Store = new Vuex.Store({
  plugins: [createPersistedState()]
});
```

## Naming Conventions

### Store

| mutations  | actions     | methods     | description           |
| ---------- | ----------- | ----------- | --------------------- |
| SET_EVENTS | fetchEvents | created     | To fetch all data's   |
| SET_EVENT  | fetchEvent  | created     | To fetch event by ID  |
| ADD_EVENT  | createEvent | createEvent | To add event to store |

| Description                      | Parent  | Child   |
| -------------------------------- | ------- | ------- |
| Update Name from child to parent | getName | setName |
