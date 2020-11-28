import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage/homepage.jsx";

const HatsPage = () => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

function App() {
  return (
    // <div>
    //   <HomePage></HomePage>
    // </div>
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop/hats" component={HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
