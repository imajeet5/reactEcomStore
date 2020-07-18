import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/signIn-signUp/signIn-signUp.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";

class App extends React.Component<any, S> {
  state: S = { currentUser: null };
  unsubscribeFromAuth: firebase.Unsubscribe | null = null;

  componentDidMount() {
    // this will trigger whenever user signup using google
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // this.setState({ currentUser: user });
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef?.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      }
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
  currentUser: any;
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
