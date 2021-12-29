# TypeScript

## Example



### Create component with Option API

```javascript
<script lang="ts">
  import {defineCompnent} from 'vue';
  export default defineComponent({
		name :'App',
    datea(){return{}}
})
</script>
```



### Create Component with Composition API

```javascript
<script lang="ts">
  import {defineCompnent, reactive, toRefs} from 'vue';
  export default defineComponent({
	name : 'App',
  setup(){
    const state = reactive({name : 'Link', age : 25 as string | number});
    return { ...toRefs(state)}
  }  
	});
</script>
```



### Ref (Generic argument instead of typeAsserssion)

```javascript
import { ref } from 'vue';
setup(){
  const name = ref('Link');
  const age = ref<number| string>(25) ;
  return { name, age}
}
```



| Example                                               | Particulars                                                  |
| ----------------------------------------------------- | ------------------------------------------------------------ |
| let age : number = 24                                 | variable age is declared with datatype number                |
| let age : string \| number = 'twenty four'            | variable age declaration with number or string datatype      |
| ```data(){ return { age : 24 as number | string }}``` | vue data() type declaration.                                 |
| calculateAge(name : string) : string {...}            | Funciton declartion params datatype and return value         |
| calculateAge(name : string \| number ) : void {...}   | Funciton declartion **Type Asserssion** params number or string and no return value |

### Custom DataType

File Name : types/job.ts

```javascript
interface Job {
title : string,
location : string, 
salary : number,
id : string
}

export default Job
```

File Name : App.vue

```javascript
<template>
  <JobLIst :jobs="jobs" />
</template>
import JobList from './components/JobList.vue';
import Job from './type/Job';
export default defineComponent({
  component : {JobList},
  setup(){
    const jobs = ref<Job[]>([
      {
				title : 'Support Website',
				location : 'Navi Mumbai', 
				salary : 40000,
				id : '1'
			}
    ]);
    return { Jobs}
  }
})
```

File Name : components/JobLists.vue (PropType)

```javascript
<template>
  <div class="job-list">
    <ul>
    	<li v-for="job in jobs" :key="job.id">{{title}}</li>
    </ul>
  </div>
</template>
<script lang="ts">
import {defineComponent, PropType} from 'vue';
import Job from '@/type/Job';
export default defineComponent({
  props :{
    jobs : {
      required : true,
      type : Array as PropType<Job[]>
    }
  }
})
</script>
```



### Custom Type

File Name : types/OrderTerm.ts

```javascript
type OrderTerm = 'location' | 'title' | 'salary';
export defualt OrderTerm;
```

File Name : App.vue

```javascript
<template>
	<div class="app">
    <button @click="handleClick('title')">Order by title</button>
	 	<JobLIst :jobs="jobs" :order="order"/>
  </div>
</template>
<script lang="ts">
import {defineComponent, PropType} from 'vue';
import JobList from './components/JobList.vue';
import Job from '@/type/Job';
import OrderTerm form './types/OrderTerm';
export default defineComponent({
  component : {JobList},
  setup(){
    const jobs = ref<Job[]>([
      {
				title : 'Support Website',
				location : 'Navi Mumbai', 
				salary : 40000,
				id : '1'
			}
    ]);
    const order = ref<OrderTerm>('title');
    const handleClick = (term: OrderTerm)=>{
      order.value = term
    }
    return { Jobs, order, handleClick}
  }
})
</script>
```

File Name : components/JobLists.vue (PropType)

```javascript
<template>
  <p>Ordered by {{order}}</p>
  <div class="job-list">
    <ul>
    	<li v-for="job in orderedJobs" :key="job.id">{{title}}</li>
    </ul>
  </div>
</template>
<script lang="ts">
import {defineComponent, PropType} from 'vue';
import Job from '@/type/Job';
import OrderTerm form '@/types/OrderTerm';
export default defineComponent({
  props :{
    jobs : {
      required : true,
      type : Array as PropType<Job[]>
    },
  	order :{
      required : true,
      type : String as PropType<OrderTerm>
    }
  },
  setup(props){
  	const orderedJobs = computed(()=>{
  		return [...props.jobs].sort((a : Job, b: Job)=>{
        return a[props.order] > b[props.order] ? 1 : -1
      })
		})
    
    return { orderedJobs}
  }
})
</script>
```

### Interface : 

Create a new type, describing the property names and value types of an object. Interface are object structure, It start Wifth first uppercase character.

```javascript
interface Todo {
  id : number;
  title : string;
  completed : boolean;
}

axios.get(url).then(response =>{
  const todo = response.data as Todo
});

interface Vehical {
  name : string;
  year : Date;
  broken : boolean;
  summary(): string;
}
const printVehical = (car : Vehical) : void =>{
  console.log(car.summary());
} 
```

### Type annotations :

Code we (developers) add to tell Typescript what type of value a variable will refer to

```javascript
let age : number = 45;
let name : string = 'Prashant';
let hasName : boolean = true;

let nothingMuch : null = null;
let nothing : undefined = undefined;

// built in objects
let now : Date = new Date();

//Array
let colors : string[] = ['red','green','blue']

//Classes
class Car {
  
}
let car : Car = new Car();

//Object Literal seprated by ;
let point : { x : number; y : number } = {
  x : 10,
  y : 20
}

//Function LHS defination & RHS is actual function
const logNumber : (i:number) => void = (i : number) =>{
  console.log(i);
}

//Touple
const pepsi : [string, boolean, number] = ['brown', true, 40];
// Using Type alias
type Drink = [string, boolean, number];
const pepsi : Drink = ['brown', true, 40];
```



### Type inference : 

Typescript tries to figure out what type of value a variable refers to. If declaration and initialisation are on the same line, Typescript will figure out the type of  'color' for us.

```javascript
let age = 45;
let name = 'Prashant';
```



### Class

```javascript
class Vehicle {
  //field declaration and initilisation
  constructor(public color : string){}
  
  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string){
    super(color);
  }
  //public method
  startDrivingProess(): void {
    console.log(vehical.color);
  }
}

const car = new Car(4,'red');
car.startDrivingProcess();
```



## Command Line Tools

| Command       | Explanation                                                  |
| ------------- | ------------------------------------------------------------ |
| parcel        | Convert .ts to .js in browser mode directly                  |
| tsc intexe.ts | Convert index.ts into index.js                               |
| tsc --init    | Create tsconfig.json, you need to set { outDir : './build', rootDir : "./src" } if required. |
| tsc -w        | Read tsconfig.json convert .ts to .js and watch mode is on.  |



## Libraries don't have type defination

```javascript
//core node modules
npm install @types/node

//other libraries
npm install @types/<libarary>
```

### Type Assertion

Developer trying to overrrides typescript default behaviour and told typescript force it to treat it as new types.

```javascript
const todo = response.data as Todo
```



### Generic Constraints

Telling typescript T has all the properties of Printable Interface.

```javascript
interface Printable {
  print():void;
}

function printHousesOrCars<T extends Printable>(arr: T[]){
  for (let i = 0; i < arr.length; i++){
    arr[i].print(i)
  }
}
```

