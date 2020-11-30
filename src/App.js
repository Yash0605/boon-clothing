import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage/homepage.jsx";
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.jsx';

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
      <Header></Header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;