# ECMA Script

## Constants

Support for constants (also known as "immutable variables"), i.e., variables which cannot be re-assigned new content. Notice: this only makes the variable itself immutable, not its assigned content (for instance, in case the content is an object, this means the object itself can still be altered).

## Block-Scoped Variables

Block-scoped variables (and constants) without hoisting.

## Arrow function

## Extemded Parameter Handling

- Default Parameter values

- Rest Prameter

- Spread Operator

## Template Litrals

- String Interplation

## Enhanced Object Property

- Property Shorthand

```
var x = 0, y = 0
obj = { x, y }
```

- Method Properties

```
obj = {
    foo (a, b) {
        …
    },
}
```

## Destructuring Assignment

```
var list = [ 1, 2, 3 ]
var [ a, , b ] = list
[ b, a ] = [ a, b ]
```

## Object Matching, Shorthand Notation

```
var { op, lhs, rhs } = getASTNode()
```

## Modules

### Value Export/Import :

Support for exporting/importing values from/to modules without global namespace pollution.

```
//  lib/math.js
export function sum (x, y) { return x + y }
export var pi = 3.141593

//  someApp.js
import * as math from "lib/math"
console.log("2π = " + math.sum(math.pi, math.pi))

//  otherApp.js
import { sum, pi } from "lib/math"
console.log("2π = " + sum(pi, pi))
```

## Classes

More intuitive, OOP-style and boilerplate-free classes.

```
class Shape {
    constructor (id, x, y) {
        this.id = id
        this.move(x, y)
    }
    move (x, y) {
        this.x = x
        this.y = y
    }
}
```

## New Build-In Methods

- Object Property Assignment : New function for assigning enumerable properties of one or more source objects onto a destination object.

```
var dest = { quux: 0 }
var src1 = { foo: 1, bar: 2 }
var src2 = { foo: 3, baz: 4 }
Object.assign(dest, src1, src2)
dest.quux === 0
dest.foo  === 3
dest.bar  === 2
dest.baz  === 4
```

- Array Element Handing

```
[ 1, 3, 4, 2 ].find(x => x > 3) // 4
[ 1, 3, 4, 2 ].findIndex(x => x > 3) // 2
```

- String Repetating : "foo".repeat(3)
- String Searching

```
"hello".startsWith("ello", 1) // true
"hello".endsWith("hell", 4)   // true
"hello".includes("ell")       // true
"hello".includes("ell", 1)    // true
"hello".includes("ell", 2)    // false
```

- Number Type Checking

```
Number.isNaN(42) === false
Number.isNaN(NaN) === true

Number.isFinite(Infinity) === false
Number.isFinite(-Infinity) === false
Number.isFinite(NaN) === false
Number.isFinite(123) === true
```

- Number Truncation : Truncate a floating point number to its integral part, completely dropping the fractional part.

```
console.log(Math.trunc(42.7)) // 42
console.log(Math.trunc( 0.1)) // 0
console.log(Math.trunc(-0.1)) // -0
```

## Promise

--- Promise Usage
First class representation of a value that may be made asynchronously and be available in the future.

```
function msgAfterTimeout (msg, who, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${msg} Hello ${who}!`), timeout)
    })
}
msgAfterTimeout("", "Foo", 100).then((msg) =>
    msgAfterTimeout(msg, "Bar", 200)
).then((msg) => {
    console.log(`done after 300ms:${msg}`)
})
```

-- Promise All

## Map/Set

- Set Data-Structure

```
let s = new Set()
s.add("hello").add("goodbye").add("hello")
s.has("hello") //true
s.delete("hello") //true
s.size()
s.clear()
```

- Map Data-Structure

```
let m = new Map()
let s = Symbol()
m.set("hello", 42)
```

## Internationalisation & Localization

- Number Formating :

```
var l10nEN = new Intl.NumberFormat("en-US")
l10nEN.format(1234567.89) === "1,234,567.89"
```

-- Currency Formatting :

```
var l10nUSD = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })
l10nUSD.format(100200300.40) === "$100,200,300.40"
```

- Date/Time Formating

```
var l10nEN = new Intl.DateTimeFormat("en-US")
l10nEN.format(new Date("2015-01-02")) === "1/2/2015"
```

## Generator

```
function* gen(){
    yield console.log("pear");
    yield console.log("banana");
    yield console.log("apple");
}

var myGen = gen();
myGen.next();
```
