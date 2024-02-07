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