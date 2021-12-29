# Vue 3

## Example 1

```javascript
<script lang="ts">
  import {defineCompnent, reactive, toRefs, computed} from 'vue';
  export default defineComponent({
	name : 'App',
  setup(){
    const state = reactive({name : 'Link', age : 25 as string | number});
    return { ...toRefs(state)}
    const handleClick = async ()=>{
      
    }
    const orderedJobs = computed(()=>{
      return state.name;
    })
  }  
	});
</script>
```



### Ref (Generic argument instead of typeassersion)

```javascript
import { ref } from 'vue';
setup(){
  const name = ref('Link');
  const age = ref<number| string>(25) ;
  return { name, age}
}
```

