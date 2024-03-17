import { useState } from "react"

function Dropdown({ options }) {
    const [isOpen, setOpen] = useState(false)
    const [selectedColor, setSelectedColor] = useState(null)

    const handleToggle = () => {
        // setOpen(!isOpen)  // simple style
        // setOpen((current) => {return !current})  // avoiding delays style
        setOpen((current) => !current)  // even shorter xd
    }

    const handleSelect = (selected) => {
        setOpen(false)
        console.log("value selected", selected)
        setSelectedColor(selected)
    }

    const renderedOptions = options.map((option) => {
        return <div onClick={() => handleSelect(option)} key={option.value}>{option.label}</div>
    })

    return <div>
        <div onClick={() => handleToggle()}>{selectedColor? selectedColor.value : "Select..."}</div>
        {isOpen && <div>{renderedOptions}</div>}
    </div>
}

export default Dropdown
