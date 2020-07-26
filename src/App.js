import React, { Component } from 'react';
import Header from './App/components/Header.jsx';
import Menu from './App/containers/Menu';
import User from './App/containers/User';
import Cart from './App/containers/Cart';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <section>
            <Switch>
              <Route path="/menu" component={Menu} />
              <Route exact path="/" component={User} />
              <Route path="/cart" component={Cart} />
            </Switch>
          </section>
        </main>
      </>
    );
  }
}

export default connect()(App);
