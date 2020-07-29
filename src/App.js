import React, { Component } from 'react';
import Header from './App/components/Header.jsx';
import Menu from './App/containers/Menu';
import User from './App/containers/User';
import Cart from './App/containers/Cart';
import { Redirect, Switch, Route } from 'react-router-dom';
import './App.css';
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <section className="container content">
            <Switch>
              <Route exact path="/">
                <Redirect to="/menu" />
              </Route>
              <Route path="/menu" component={Menu} />
              <Route path="/user" component={User} />
              <Route path="/cart" component={Cart} />
            </Switch>
          </section>
        </main>
      </>
    );
  }
}

export default connect()(App);
