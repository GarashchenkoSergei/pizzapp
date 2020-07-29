import React, { Component } from "react";
import { connect } from 'react-redux';
import { actions } from '../containers/Cart/store/duck';
import styles from './Switch.module.css';

const mapStateToProps = (state) => ({
  isDollar: state.cartReducer.isDollar,
});

const mapDispatchToProps = (dispatch) => ({
  changeCurrency: (value) => dispatch(actions.changeCurrency(value)),
});

class Switch extends Component {
  render() {
    const { changeCurrency } = this.props;

    return (
      <div className={styles.toggle_switch}>
        <input
          type="checkbox"
          className={styles.toggle_switch_checkbox}
          name="switch"
          id="switch"
          onChange={() => changeCurrency()}
        />
        <label className={styles.toggle_switch_label} htmlFor="switch">
          <span className={styles.toggle_switch_inner} />
          <span className={styles.toggle_switch_switch} />
        </label>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Switch);