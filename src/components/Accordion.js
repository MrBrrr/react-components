import { useState } from "react";

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(0);

    // define outsite the mapping function (easier to read it, common way on big project) 
    const handleClick = (x) => {
        setExpandedIndex(x)  // 'index' in not defined! -> go hybrid shor&long -hand version of event handler 
    }

    const renderedItems = items.map((item, index) => {
        const isExpended = index === expandedIndex
        console.log(isExpended)

        // if (index === expandedIndex) {
        //     console.log("expanded")
        // } else {
        //     console.log("collapsed")
        // }
        
        // && returns the first falsey value or the last truthy
        // key is required in list items rendered (App.js)
        return (
            <div key={item.id}>
                {/* <div onClick={() => setExpandedIndex(index)}>{item.label}</div> */}
                <div onClick={() => handleClick(index)}>{item.label}</div>
                {/* PASSING EVENT WAY: <div onClick={handleClick}>{item.label}</div> --> handleClick = (event) => {...} */}
                {isExpended && <div>{item.content}</div>}  
            </div>
        )
    })
    return <div>{renderedItems}</div>
}

export default Accordion;
