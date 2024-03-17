import Dropdown from "./components/Dropdown"

function App() {
  const options = [
    {label: "Red", value: "red"},
    {label: "Blue", value: "blue"},
    {label: "Green", value: "green"},
]
  return <Dropdown options={options} />
}

export default App;
