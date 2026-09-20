Javascript Essentials
=====================

_A JS quick reference minus most of the ES6+ pollution!_


### Operator Precedence

|                     |                                  |
|---------------------|----------------------------------|
| `. [] () new`       | property, element, function, new
| `++ -- - + ~ !`<br />`delete typeof void` | unary operators
| `* / %`             | multiply, divide, remainder
| `+ -`               | add/concat, subtract
| `<< >> >>>`         | shift left, shift right sign/zero extension
| `< > <= >= instanceof in` | less/greater than, less/greater than/equal, type, membership
| `!= == !== ===`     | non/equality, non/identical
| `&`                 | bitwise AND
| `^`                 | bitwise XOR
| `\|`                | bitwise OR
| `&&`                | logical AND
| `\|\|`              | logical OR
| `?:`                | ternary conditional
| `= *= /= += -= %=`<br />`<<= >>= >>>=`<br />`&= ^= \|= &&= \|\|=`<br />`**=` <sup>2016</sup> `??=` <sup>2020</sup> | assignment
| `=>` <sup>ES6</sup> | arrow operator
| `,`                 | comma operator


### Arguments <sup>1.1</sup>

```js
arguments[n]
arguments.callee  // reference to currently executing function; js 1.2
arguments.length
```


### Array <sup>1.1</sup>

```js
new Array()                          // `[]` preferred since js 1.2
new Array(size)
new Array(element1, element2, ..)    // `[element1, element2, ..]` preferred since js 1.2

array.concat(element1, element2, ..)  // returns new array; array args deconstructed; js 1.2
array.join(separator)  // returns string of elements, with separator string between each
array.length           // unsigned 32-bit integer
array.pop()            // remove & return last element; js 1.2
array.push(value, ..)  // append value(s); returns new length; js 1.2
array.reverse()        // reverse elements in-place; returns nothing
array.shift()          // remove & return first element; shift elements down; decrement length; js 1.2
array.slice(begin, end)        // returns new array; `begin` to `end` exclusive; js 1.2
array.sort(ordering_function)  // returns reference; sorted in-place; numbers converted to strings; no time/space guarantees
array.splice(begin, count, element1, ..)  // returns array of deleted elements; deletes `count` then inserts args; js 1.2
array.toLocaleString()         // returns localized string representation of array; ES1
array.toString()               // returns string representation of array
array.unshift(element1, ..)    // shift elements up & insert arg(s) at beginning of array; js 1.2
```


### Error <sup>ES3</sup>

```js
new Error(optional_message)
new EvalError(optional_message)       // during `eval()`; use `SyntaxError` instead
new RangeError(optional_message)      // number outside valid range
new ReferenceError(optional_message)  // illegal reference (undeclared variable)
new SyntaxError(optional_message)     // syntax error
new TypeError(optional_message)       // type error (missing interface)
new URIError(optional_message)        // during `encodeURI()` or `decodeURI()`

error.message     // string passed to constructor or implementation-defined default string
error.name        // type of exception (name of constructor)
error.toString()  // string representation of error

try { throw 'some error' } catch(error) { console.error(error) } finally { console.log('run regardless') }
```


### Math
```js
Math.E
Math.LN10
Math.LN2
Math.LOG10E
Math.LOG2E
Math.PI
Math.SQRT1_2
Math.SQRT2

Math.abs(n)
Math.acos(n)
Math.asin(n)
Math.atan(n)
Math.atan2(n)
Math.ceil(n)
Math.cos(n)
Math.exp(n)
Math.floor(n)
Math.log(n)
Math.max(n, ..)  // returns NaN if no args; only 2 args < ES3
Math.min(n, ..)  // returns NaN if no args; only 2 args < ES3
Math.pow(n, m)   // returns n to power of m
Math.random()    // returns pseudo-random number between 0 and 1.0; js 1.1
Math.round(n)    // returns n rounded to nearest integer
Math.sin(n)
Math.sqrt(n)
Math.tan(n)
```


### Number <sup>1.1</sup>

```js
new Number(value)  // returns `value` wrapped in `Number` object
Number(value)      // returns `value` as primitive number

Number.isFinite(n)  // `false` if `n` is `NaN` or +/- `Infinity`; no numeric conversion, unlike global `isFinite()`; ES6
Number.MAX_VALUE    // ~ 1.75E+308
Number.MIN_VALUE    // smallest positive; ~ 5E-324
Number.NaN          // not a number; same as ES1 global `NaN`
Number.NEGATIVE_INFINITY  // same as ES1 global `-Infinity`
Number.POSITIVE_INFINITY  // same as ES1 global `Infinity`

number.toExponential(count)  // return string in exponential notation, with `count` (0-20) digits after decimal; rounded or zero-padded; ES3
number.toFixed(count)    // return string with exactly `count` (0-20) digits after decimal; rounded or zero-padded; ES3
number.toLocaleString()  // string formatted to local conventions; implementation-dependent; ES3
number.toPrecision(n)    // string containing `n` (1-21) significant digits; fixed-point notation if possible; rounded or zero-padded; ES3
number.toString(radix)   // returns number as string, using optional radix (2-36); default base 10
```


### Object

```js
new Object()  // `{ }` preferred since js 1.2
Object()      // identical to `new Object()`; js 1.1

object.constructor  // reference to constructing function; js 1.1
object.hasOwnProperty(name)  // `true` if has non-inherited property `name`; ES3
object.isPrototypeOf(o)  // `false` if `o` not an object or this not its prototype; ES3
object.propertyIsEnumerable(name)  // `true` if has non-inherited enumerable property `name`; ES3
object.toLocaleString()  // returns localized string representation; calls `.toString()` by default; ES3
object.toString()  // returns string representation; subclasses should override; generic implementation from `Object` since js 1.1
object.valueOf()  // returns primitive value, if any; `Object` type returns self; js 1.1

object = null  // remove object by setting reference to `null`; js 1.1
```


### String <sup>1.1</sup>

```js
new String(value)  // converts & wraps `value` in `String` object
String(value)      // converts `value` to primitive string
''                 // since js 1.0

String.fromCharCode(n1, n2, ..)  // returns new string of characters with encodings specified by args; js 1.2
String.fromCodePoint(...codepoints)  // surrogate pair aware version of `fromCharCode`; ES6

string.charAt(n)           // character at position `n`
string.charCodeAt(n)       // unicode encoding of character at position `n`; js 1.2
string.codePointAt(n)      // surrogate pair aware; index still based on 16-bit code units; ES6
string.concat(value1, ..)  // returns new string with each arg converted & concatenated; js 1.2
string.indexOf(substring[, at_or_after])  // first position of `substring`; `-1` if not found
string.lastIndexOf(substring[, before])   // last position of `substring`; `-1` if not found
string.length         // number of characters
string.match(regexp)  // returns array of match results or `null` if none; js 1.2
string.replace(regexp, replacement)  // returns new string with `regexp` matches replaced with `replacement`; js 1.2
string.search(regexp)       // returns position of first matching substring, or `-1` if not found; js 1.2
string.slice(begin[, end])  // returns new string excluding `end`; negative positions from end of string; js 1.2
string.split(delimiter[, max_limit])  // returns array of strings split on `delimiter` (string or regexp); js 1.1
string.substring(index_a[, index_b])  // returns new string, from lesser to greater (exclusive) of both args
string.toLowerCase()  // returns new lowercased string
string.toUpperCase()  // returns new uppercased string
string.trim()  // returns new string with whitespace removed at both ends; ES5
```


### console
```js
console.assert(assertion, val, ..)       // console error if false w/ optional values; FF 28, Chrome 2; Node 10
              (assertion, str, sub, ..)  // console error if false w/ string w/ optional substitutions
console.log(val, ..)       // log value(s) to console w/ separation between each; FF 4
           (str, sub, ..)  // log string to console w/ optional string substitutions
```
