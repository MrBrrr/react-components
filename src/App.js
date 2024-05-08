import Link from "./components/Link";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";

function App() {
  return (
  <div>
    <Link url="/accordion">Go to accordion</Link>
    <Link url="/dropdown">Go to dropdown</Link>
    {/* routing rules */}
    <div>
      <Route path="/accordion">
        <AccordionPage />
      </Route>
      <Route path="/dropdown">
        <DropdownPage />
      </Route>
    </div>
  </div>
  )
}

export default App;
