import { GrApple, GrAccessibility, GrBike, GrBug, GrClear} from "react-icons/gr";
import Button from "./components/Button";

function App() {
  const handleClick = () => {console.log("click!")}
  const handleMouseOver = () => {console.log("mouse enetring!")}
  const handleMouseLeave= () => {console.log("mouse leaving!")}
  return <div>App
    <div>
      {/* <Button text="click here"/> 
      prop approach vs. children approach */}
      <Button primary onClick={handleClick} className="mb-5  bg-blue-100">
        <GrAccessibility />
        {/* <GrAccessibility className="mr-1" />  that would be a ssolution, but very tedious...*/}
        Click here!
      </Button>
    </div>
    <div>
      <Button primary onClick={handleClick}>
        <GrAccessibility />
        {/* <GrAccessibility className="mr-1" />  that would be a ssolution, but very tedious...*/}
        Click here 2!
      </Button>
    </div>
    <div>
      <Button secondary outline onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <GrApple/>
        Buy now
      </Button>
    </div>
    <div>
      <Button success outline rounded>
        <GrBike />
        Searching reaults
      </Button>
    </div>
    <div>
      <Button warning rounded>
        <GrBug />
        Cancel reservationt
      </Button>
    </div>
    <div>
      <Button danger>
        <GrClear />
        Error!
      </Button>
    </div>
    <div>
      <Button>
        Plain button
      </Button>
    </div>
  </div>;
}

export default App;
