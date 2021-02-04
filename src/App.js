import "./App.css";
import MenuDetails from "./components/MenuDetails";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Error from "./components/Error";
import Main from "./components/Main";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/:id" component={MenuDetails} />
          <Route path="/*" component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
