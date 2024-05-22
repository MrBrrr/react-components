import { useState } from "react";
import Dropdown from "../components/Dropdown";

function DropdownPage() {
  const options = [
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
    { label: "Green", value: "green" },
  ];
  const [selection, updateSelection] = useState(null);
  // selection: option | null

  const handleSelect = (option) => {
    console.log("option selected", option);
    updateSelection(option);
  };

  return (
    <div className="flex">
      {/* <Dropdown options={options} value={selection} onChange={handleSelect} /> */}
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>
  );
}

export default DropdownPage;
