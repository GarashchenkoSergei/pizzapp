import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from './store/duck';
import styles from './Cart.module.css';
import { groupedCart, cartSum, cartSumEuro } from './store/selectors';
import Switch from '../../components/Switch';
import SubmitOrderForm from '../../components/SubmitOrderForm';

const mapStateToProps = (state) => ({
  cart: state.cartReducer.cart,
  groupedCart: groupedCart(state.cartReducer.cart),
  cartSum: cartSum(state.cartReducer.cart),
  cartSumEuro: cartSumEuro(state.cartReducer.cart),
  isDollar: state.cartReducer.isDollar,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (value) => dispatch(actions.addToCart(value)),
  removeFromCart: (value) => dispatch(actions.removeFromCart(value)),
  removeAllFromCart: (value) => dispatch(actions.removeAllFromCart(value)),
});

class Cart extends Component {
  state = {
    isModalOpened: false,
    deliveryCost: 10,
  };

  handleModal = (e) => {
    const { isModalOpened }= this.state;
    isModalOpened
      ? this.setState({ isModalOpened: false })
      : this.setState({ isModalOpened: true });
  };

  render() {
    const {
      cart,
      cartSum,
      cartSumEuro,
      groupedCart,
      isDollar,
      addToCart,
      removeFromCart,
      removeAllFromCart,
    } = this.props;
    const { isModalOpened, deliveryCost } = this.state;

    return (
      <>
        {cart.length ? (
          <div className={styles.main_cart}>
            <ul className={styles.cart_list}>
              {groupedCart.map((item, index) => (
                <li key={index} className={styles.cart_item}>
                  <button
                    className={styles.close_button}
                    onClick={() => removeAllFromCart(item[0].id)}
                  >
                    X
                  </button>
                  <div className={styles.cart_item__image}>
                    <img src={item[0].img_url} alt="" />
                  </div>
                  <h3 className={styles.cart_item__title}>{item[0].name}</h3>
                  <div className={styles.item_amount}>
                    <button
                      className={styles.item_amount__change}
                      onClick={() => removeFromCart(item[0].id)}
                    >
                      -
                    </button>
                    <span className={styles.item_amount__number}>
                      {item.length}
                    </span>
                    <button
                      className={styles.item_amount__change}
                      onClick={() => addToCart(item[0])}
                    >
                      +
                    </button>
                  </div>
                  <span className={styles.cart_item__cost}>
                    Final cost: ${item[0].cost * item.length}
                  </span>
                </li>
              ))}
            </ul>
            <Switch />
            <div className={styles.cart_footer}>
              {isDollar ? (
                <p className={styles.cart_footer_text}>
                  <span className={styles.cart_total}>Total:</span>
                  <span className={styles.cart_total_cost}>$ {cartSum}</span>
                </p>
              ) : (
                <p className={styles.cart_footer_text}>
                  <span className={styles.cart_total}>Total:</span>
                  <span className={styles.cart_total_cost}>
                    € {cartSumEuro}
                  </span>
                </p>
              )}
              <button className={styles.cart_submit} onClick={this.handleModal}>
                Submit order
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h3 className={styles.main_cart__text}>Cart is empty</h3>
          </div>
        )}
        {isModalOpened ? (
          <div className={styles.modal}>
            <div className={styles.modal_wrapper}>
              <button
                className={`${styles.close_button} ${styles.close_button__custom}`}
                onClick={this.handleModal}
              >
                X
              </button>
              <h2>Delivery details:</h2>
              {isDollar ? (
                <p className={styles.modal_footer}>
                  <span className={styles.cart_total}>Total: $ {cartSum}</span>
                  <span className={styles.cart_total}>
                    Delivery: $ {deliveryCost}
                  </span>
                  <span className={styles.cart_total}>
                    Order and delivery: $ {cartSum + Math.floor(deliveryCost * 100) / 100}
                  </span>
                </p>
              ) : (
                <p className={styles.modal_footer}>
                  <span className={styles.cart_total}>
                    Total: € {cartSumEuro}
                  </span>
                  <span className={styles.cart_total}>
                    Delivery: € {deliveryCost * 0.85}
                  </span>
                  <span className={styles.cart_total}>
                    Order and delivery: €{' '}
                    {cartSumEuro + Math.floor(deliveryCost * 85) / 100}
                  </span>
                </p>
              )}
              <SubmitOrderForm />
            </div>
          </div>
        ) : (
          ''
        )}
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
