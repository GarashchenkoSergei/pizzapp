import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from './store/duck';
import {
  getIsLoggedIn,
} from './store/selectors';
import styles from './User.module.css';
import History from '../History'

const mapStateToProps = (state) => ({
  isLoggedIn: getIsLoggedIn(state),
});

const mapDispatchToProps = (dispatch) => ({
  logIn: (value) => dispatch(actions.logIn(value)),
});

class User extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { logIn } = this.props;
    const { email, password } = this.state;

    email && password && logIn({ email, password });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password } = this.state;
    const { isLoggedIn } = this.props;

    return (
      <>
        {isLoggedIn ? (
          <div className={styles.user_content}>
            <h2 className={styles.user_content_title}>Orders history:</h2>
            <History />
          </div>
        ) : (
          <div className={styles.user_content}>
            <h2 className={styles.user_content_title}>Log in</h2>
            <form
              className={styles.auth_content__login_form}
              onSubmit={this.handleSubmit}
            >
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="email"
                name="email"
                size="28"
                value={email}
                onChange={this.handleChange}
              />
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                type="password"
                name="password"
                size="28"
                value={password}
                onChange={this.handleChange}
              />
              <button className={styles.button} type="submit">Log in</button>
            </form>
          </div>
        )}
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
