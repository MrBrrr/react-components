import { useState } from "react"
import { GoChevronDown } from "react-icons/go";

function Dropdown({ options, value, onChange }) {
    const [isOpen, setOpen] = useState(false)
    // const [selectedColor, setSelectedColor] = useState(null)

    const handleToggle = () => {
        // setOpen(!isOpen)  // simple style
        // setOpen((current) => {return !current})  // avoiding delays style
        setOpen((current) => !current)  // even shorter xd
    }

    const handleSelect = (selected) => {
        setOpen(false)
        onChange(selected)
    }
    // let content = value? value.label : "Select..." ===
    let content = value?.label || "Select..."

    const renderedOptions = options.map((option) => {
        return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleSelect(option)} key={option.value}>{option.label}</div>
    })

    return <div className="w-48 relative">
        <div className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full" onClick={() => handleToggle()}>
            {content}
            <GoChevronDown className="text-lg"/>
        </div>
        {isOpen && <div className="absolut top-full border rounded p-3 shadow pg-white w-full">{renderedOptions}</div>}
    </div>
}

export default Dropdown