import Button from "./Button";

function App() {
  return <div>App
    <div>
    {/* <Button text="click here"/> 
    prop approach vs. children approach */}
    <Button primary>Click here!</Button>
    </div>
    <div>
      <Button secondary outline>Buy now</Button>
    </div>
    <div>
      <Button success outline rounded>Searching reaults</Button>
    </div>
    <div>
      <Button warning rounded>Cancel reservationt</Button>
    </div>
    <div>
      <Button danger>Error!</Button>
    </div>
    <div>
      <Button>Plain button</Button>
    </div>
  </div>;
}

export default App;
