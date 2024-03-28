import { useState } from "react"
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
    const [isOpen, setOpen] = useState(false)
    // const [selectedColor, setSelectedColor] = useState(null)

    const handleToggle = () => {
        // setOpen(!isOpen)  // simple style
        // setOpen((current) => {return !current})  // avoiding delays style
        setOpen((current) => !current)  // even shorter xd
    }

    window.TimeTwo = performance.now()
    const handleSelect = (selected) => {
        window.TimeOne = performance.now()
        setOpen(false)
        onChange(selected)
    }
    // let content = value? value.label : "Select..." ===
    let content = value?.label || "Select..."

    const renderedOptions = options.map((option) => {
        return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleSelect(option)} key={option.value}>{option.label}</div>
    })

    return <div className="w-48 relative">
        <Panel className="flex justify-between items-center cursor-pointer" onClick={() => handleToggle()}>
            {content}
            <GoChevronDown className="text-lg"/>
        </Panel>
        {isOpen && <Panel className="absolut top-full">{renderedOptions}</Panel>}
    </div>
}

export default Dropdown
