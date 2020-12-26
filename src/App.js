import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage/homepage.jsx";
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.jsx';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import React from 'react';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions'
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
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
            })
        });
      } else {
        setCurrentUser(userAuth)
      }
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
        <Header></Header>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/signIn" component={SignInAndSignUp}></Route>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
