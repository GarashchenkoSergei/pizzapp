import React, { Component } from 'react';
import { useForm } from 'react-hook-form';
import styles from './SubmitOrderForm.module.css';
import { connect } from 'react-redux';
import { actions } from '../containers/Cart/store/duck';
import { cartSum } from '../containers/Cart/store/selectors';

const mapStateToProps = (state) => ({
  cartSum: cartSum(state.cartReducer.cart),
});

const mapDispatchToProps = (dispatch) => ({
  submitOrder: (value) => dispatch(actions.submitOrder(value)),
});

class SubmitOrderForm extends Component {
  render() {
    const {submitOrder} = this.props;
    return (
      <form
        className={styles.auth_content__login_form}
        onSubmit={() => submitOrder()}
      >
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          size="28"
          // value={name}
          // onChange={this.handleChange}
        />
        <label htmlFor="surname">Second name:</label>
        <input
          id="surname"
          type="text"
          name="surname"
          size="28"
          // value={surname}
          // onChange={this.handleChange}
        />
        <label htmlFor="email">Phone:</label>
        <input
          id="phone"
          type="text"
          name="phone"
          size="28"
          // value={email}
          // onChange={this.handleChange}
        />
        <label htmlFor="password">Address:</label>
        <input
          id="address"
          type="text"
          name="address"
          size="28"
          // value={password}
          // onChange={this.handleChange}
        />
        <button type="submit" className={styles.button}>Sumbit</button>
      </form>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SubmitOrderForm);