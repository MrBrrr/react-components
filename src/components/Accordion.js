import { useState } from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  // define outsite the mapping function (easier to read it, common way on big project)
  const handleClick = (newIndex) => {
    console.log("STALE version of expanded index", expandedIndex);

    setExpandedIndex((current) => {
      console.log("to most up to date version of expanded index", current);
      if (newIndex === current) {
        return -1;
      } else {
        return newIndex; // 'index' in not defined! -> go hybrid shor&long -hand version of event handler
      }
    });
  };

  const renderedItems = items.map((item, index) => {
    const isExpended = index === expandedIndex;
    const icon = (
      <span className="text-2xl">
        {isExpended ? <GoChevronDown /> : <GoChevronRight />}
      </span>
    );

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
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {/* PASSING EVENT WAY: <div onClick={handleClick}>{item.label}</div> --> handleClick = (event) => {...} */}
        {isExpended && <div className="border-p p-5">{item.content}</div>}
      </div>
    );
  });
  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
