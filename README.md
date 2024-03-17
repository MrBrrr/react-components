## BUTTONS

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
4. Look at mockup (draft). Remove or simplify parts that aren't changing
5. Replace remaning element with text descriptions
6. Repeate #4 and #5 with a different variation
7. Imagine you have to write a function that returns the text of steps #5 and #6. In addition to your component props - what other arguments would you need?

#### Where it is defined?
8. Decide where each `event handler` and `state` will be defined

### Example (Accordian.js):

#### # What?

1. How accordion works: user clicks on section -> it should force the previously opened section to collapse and itself to expand. Actually this could be repeated for each section. 

2. State - something changes on the screen (collapses, expands). Event handler - user perform some action (clicks).

3. State - sections are collapsing and the one clicked is expanding (1). Event handler - clicking on section header (1).

#### # Name and type
__!! Avoid arrays / objects to be a type of piece of state !!__  
__number, boolean, string should be fine__

4. Text of headers does not change, text of 'body' also not change at all

5. Expanded - is a name of expanded section (1). Collapsed - name of sections that are collapsed (2+) [exp. coll. coll.]

6. [coll. exp. coll.],    [coll. coll. exp.], 

7. Imagine function, props and their types
``` js
function myFunction(items, /*???*/) {...}  
myFunction(propsItems, /*???*/);  // ['expanded', 'collapsed', 'collapsed']
myFunction(propsItems, /*???*/);  // ['collapsed', 'expanded', 'collapsed']
myFunction(propsItems, /*???*/);  // ['collapsed', 'collapsed', 'expanded']
```
/*???*/ - might be expendedIndex = 0, 1, 2; so the integer

#### # Where?
- does any other component has reasonable need to know the peace of state value? --> YES -> App.js | NO -> component.js
- event handler ususally is defined in the same component where the state it modifies (but might be used in another)

## React does not print booleans, nulls, undefined
## JS Boolean Expressions
`||` returns the __firts truthy__ value
`&&` returns the __first falsey__ value or the __last truthy__

## React useState delays:

#### PROBLEM: React updates the piece of state but not immidatiely... 
__Batching__ is an optimization of React causing above issue but allowing to update few states in the same moment - the application works fast and smooth

How to see the issue? 
Go to console:
```js
$0.click();  // opens or closes the content
$0.click(); $0.click();  // the accordion does not come back to the initial state
```
It is only a problem when clicks become very quick one after another. Normal human user wouldn't be able to do this.

#### SOLUTION 1: Force React to update instantly
Truning batching off, but slowing app down...

#### SOLUTION 2: Access the most up to date value with Functional State Update
```js
const [value, setValue] = useState(-1)
...
const handleClick = (newIdx) => {
    setValue((current) => {
    // use 'current' in the logic instead of 'value'
    })
}
```
more in components/Accordion.js or Dropdown.js

## Event hanlder in mapping function 

```js
const handleWithEvent = (event) => {...}
const handleWithProps = (passedOption) => {...}

consr rendered = data.map((option) => {
    return <div> onClick={handleWithEvent} </div>
    return <div> onClick={() => handleWithProps(option)} </div>
})
```

## Dropdown:

1. & 2. Steps & Categorize 
Clicks on dropdown - event
List of options appears - state
Clicks on option - event
List of options disappear - state
Clicked item appears shows in the box - state

3. Rewrite:
Events: clicks on dropdown, clicks on option (2)
States: dropdown expanded or collapsed, selected option in the box (2)

4. Look at mockup. Remove or simplify parts that aren't changing
![alt text](image.png)
![alt text](image-1.png)

5. Replace remaning element with text descriptions
Menu closed, no option selected
Menu opened, no option selected
Menu closed, 1st option is selected

6. Nothing to do with this simple component 

7. Funtion + other arguments needed
STATES - name and type (and possible values):
``` js
// menu open or closed
myFunction(opts: list, isOpen: boolean) // true => menu opened, false => menu closed
// selected one of the option or null
myFunction(opts: list, selested: null | opts[n]) // nothing selected, {label: x, value, x1}
```
EVENTS - names for handlers:
`handleSelect`, `handleToggle`

8. Where?
![alt text](image-2.png)
optionSelected + handleSelect ->  parent
menu opnened/closed + handleToggle -> Dropdown.js




