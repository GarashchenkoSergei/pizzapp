import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from './store/duck';
import styles from './Cart.module.css';
import { groupedCart, cartSum } from './store/selectors';
import Switch from '../../components/Switch';

const mapStateToProps = (state) => ({
  cart: state.cartReducer.cart,
  groupedCart: groupedCart(state.cartReducer.cart),
  cartSum: cartSum(state.cartReducer.cart),
  isDollar: state.cartReducer.isDollar,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (value) => dispatch(actions.addToCart(value)),
  removeFromCart: (value) => dispatch(actions.removeFromCart(value)),
  removeAllFromCart: (value) => dispatch(actions.removeAllFromCart(value)),
});

class Cart extends Component {
  render() {
    const {
      cart,
      cartSum,
      groupedCart,
      isDollar,
      addToCart,
      removeFromCart,
      removeAllFromCart,
    } = this.props;

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
                    Final cost: {item[0].cost * item.length}
                  </span>
                </li>
              ))}
            </ul>
            <Switch />
            <div className={styles.cart_footer}>
              {isDollar ? (
                <p className={styles.cart_footer_text}>
                  <span className={styles.cart_total}>Total:</span>
                  <span className={styles.cart_total_cost}>{cartSum} $</span>
                </p>
              ) : (
                <p className={styles.cart_footer_text}>
                  <span className={styles.cart_total}>Total:</span>
                  <span className={styles.cart_total_cost}>{Math.floor(cartSum * 85) / 100} €</span>
                </p>
              )}
              <button className={styles.cart_submit}>Submit order</button>
            </div>
          </div>
        ) : (
          <div>
            <h3 className={styles.main_cart__text}>Cart is empty</h3>
          </div>
        )}
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
