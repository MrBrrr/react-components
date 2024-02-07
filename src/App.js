import { GrApple, GrAccessibility, GrBike, GrBug, GrClear} from "react-icons/gr";
import Button from "./Button";

function App() {
  return <div>App
    <div>
      {/* <Button text="click here"/> 
      prop approach vs. children approach */}
      <Button primary>
        <GrAccessibility />
        {/* <GrAccessibility className="mr-1" />  that would be a ssolution, but very tedious...*/}
        Click here!
      </Button>
    </div>
    <div>
      <Button secondary outline>
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
