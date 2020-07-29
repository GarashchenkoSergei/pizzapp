import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from './store/duck';

const mapStateToProps = (state) => ({
  cart: state.cartReducer.cart,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (value) => dispatch(actions.addToCart(value)),
});

class Cart extends Component {
  render() { 
    const { cart, addToCart } = this.props;

    return ( 
      <>
        <ul className="cart-content__list">
          {cart.map((item, index) => (
            <li key={index} className="cart-content__item">
              <div>
                <img src={item.img_url} alt=""/>
              </div>
              <h3>{item.name}</h3>
              <span>{item.cost}</span>
              <button onClick={() => addToCart(item)}>Add to cart</button>
              {/* <button onClick={() => removeToCart(item.id)}>Add to cart</button> */}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);