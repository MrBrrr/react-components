# BUTTONS

### Prop approach
`<Button text="click here"`  

### Children approach
`<Button>Click here!</Button>`  
This work fine with everything:
- plain text
- jsx components e.g. `<Icon/>`
- html elements <form> <div> etc.


`<Button primary>Clik me!</Button>` === `<Button primary={true}>Clik me!</Button>`

`<Button>Clik me!</Button>` ~~= `<Button primary={false}>Clik me!</Button>`  
It's actually `undefined`, but treated the same as `false`


### Introducing  CSS Box Model

https://www.w3schools.com/css/css_boxmodel.asp


### Classnames library:

https://www.npmjs.com/package/classnames 

``` js
import className from "classnames";
// import classnames from "classnames";  // as in documentation, both imports are correct

const finalClassName = className("py-1.5", "border", "border-sky-600")  // "py-1.5 border border-sky-600"

const finalClassName = className({
     "py-1.5": true,  // object keys cannot have dashes and special signs within it, unless is is wrapped as string (" or ')
     "border": false,
     "border-sky-600": 10,  //any truthy value
     "bg-sky-600": "",
    })  // "py-1.5 border-sky-600"

const finalClassName = className("py-1.5", {  // always
     "border": resp_1,  // the rest is conditional
     "border-sky-600": resp_2,  
     "bg-sky-600": resp_1,
    })  // "py-1.5 ...?"


const finalClassName = className("py-1.5", "border", "border-sky-600")
const finalClassName = className("py-1.5", "border", "border-sky-600")
console.log(finalClassName)  
```

!! important library !!
### Tailwind-merge

https://www.npmjs.com/package/tailwind-merge


### React-icons

https://react-icons.github.io/react-icons/

`npm install --save-exact react-icons@4.6.0`

----------------------


## Design proccess

#### What `state` and `event handlers` are there?
1. List out what a user will do and changes they will see while using the app
2. Categorize each step as `state` or `event handler`
3. Group common steps. Remove duplicaes. Rewrite descriptions.

#### What name and type?
1. Look at mockup. Remove or simplify parts that aren't changing
2. Replace remaning element with text descriptions
3. Repeate #1 and #2 with a different variation
4. Imagine you have to write a function that returns the text of steps #2 abd #3.  In addition to your componenst props, what other arguments would you need?

#### Where it is defined?
1. Decide where each `event handler` and `state` will be defined

### Example:

#### # What?

1. How accordion works: user clicks on section -> it should force the previously opened section to collapse and itself to expand. Actually this could be repeated for each section. 

2. State - something changes on the screen (collapses, expands). Event handler - user perform some action (clicks).

3. State - sections collapsing and one clickd is expanding (1). Event handledr - clicking on section header (1).

#### # Name and type
__!! Avoid arrays / objects to be a type of piece of state !!__  
__number, boolean, string should be fine__

1. Text of headers does not change, test of 'body' also not changing at all

2. Expanded - is a name of expanded section (1). Collapsed - name of sections that are collapsed (2+) [exp. coll. coll.]

3. [coll. exp. coll.],    [coll. coll. exp.], 

4. Imagine function, props and their types
``` js
function myFunction(items, /*???*/) {...}  
myFunction(propsItems, /*???*/);  // ['expanded', 'collapsed', 'collapsed']
myFunction(propsItems, /*???*/);  // ['collapsed', 'expanded', 'collapsed']
myFunction(propsItems, /*???*/);  // ['collapsed', 'collapsed', 'expanded']
```
/*???*/ - might be expendedIndex = 0, 1, 2; so the integer

#### # Where?
- does any other component has reasonable need to know the peace of state value? --> YES - App.js  | NO - component.js
- event handler ususally is defined in the same component where the state it modifies (but might be used in another)

## React does not print boleans, nulls, undefined
## JS Boolean Expressions
`||` returns the firts truthy value
`&&` returns the first falsey value or the last truthy
