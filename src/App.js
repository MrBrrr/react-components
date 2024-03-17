import { useState } from "react";
import Dropdown from "./components/Dropdown"

function App() {
  const options = [
    {label: "Red", value: "red"},
    {label: "Blue", value: "blue"},
    {label: "Green", value: "green"},
]
  const [selection, updateSelection] = useState(null)
  // selection: option | null

  const handleSelect = (option) => {
    console.log("option selected", option)
    updateSelection(option)
  }

  return <Dropdown options={options} selectedColor={selection} onColorSelect={handleSelect} />
}

export default App;
