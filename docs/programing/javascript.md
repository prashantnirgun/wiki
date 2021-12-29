# Javascript

## Object.assign()

```
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }
```

## Object.entries() :Object to array

````
const object1 = {
  a: 'somestring',
  b: 42
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// expected output:
// "a: somestring"
// "b: 42"
// order is not guaranteed```

## Object.values()
````

const object1 = {
a: 'somestring',
b: 42,
c: false
};

console.log(Object.values(object1));
// expected output: Array ["somestring", 42, false]

```

```
