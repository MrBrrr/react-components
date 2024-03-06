import { useState } from "react";

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(0);

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
                <div>{item.label}</div>
                {isExpended && <div>{item.content}</div>}  
            </div>
        )
    })
    return <div>{renderedItems}</div>
}

export default Accordion;
