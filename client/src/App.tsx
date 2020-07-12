import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/signIn-signUp/signIn-signUp.component";
import { auth } from "./firebase/firebase.util";

class App extends React.Component<any, S> {
  state: S = { currentUser: null };
  unsubscribeFromAuth: firebase.Unsubscribe | null = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    if (this.unsubscribeFromAuth) this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;

interface S {
  currentUser: firebase.User | null;
}

/**
 * function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

 */
