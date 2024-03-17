import { useState } from "react"

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
        return <div onClick={() => handleSelect(option)} key={option.value}>{option.label}</div>
    })

    return <div>
        <div onClick={() => handleToggle()}>{content}</div>
        {isOpen && <div>{renderedOptions}</div>}
    </div>
}

export default Dropdown
