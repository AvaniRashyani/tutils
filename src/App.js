import React from "react";
import TextForm from "./components/TextForm";
import Bout from "./components/Bout";
import Navbar from "./components/Navbar";

/*import { BrowserRouter as Router, Switch, Route} from "react-router-dom";*/

function App() {
  return (
    <div>
      
      <Navbar />
      <Bout />
      <TextForm />
     {/* <Router>
      <Navbar />
        <Switch>
          <Route exact path="/Bout">
            <Bout />
          </Route>
          <Route exact path="/TextForm">
            <TextForm />
          </Route>
        </Switch>
      </Router>
  </div>*/}
  </div>
  );
}

export default App;
