import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage/homepage.jsx";
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.jsx';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from './firebase/firebase.utils';
import React from 'react';

// const HatsPage = () => {
//   return (
//     <div>
//       <h1>Hats Page</h1>
//     </div>
//   );
// };

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      // <div>
      //   <HomePage></HomePage>
      // </div>
      <div>
        <Header user={this.state.currentUser}></Header>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/signIn" component={SignInAndSignUp}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
