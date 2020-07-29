import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions as cartActions } from '../containers/Cart/store/duck';
import styles from './List.module.css';

const mapStateToProps = (state) => ({
  menuList: state.menuListReducer.menuList,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (value) => dispatch(cartActions.addToCart(value)),
});

class List extends Component {
  componentDidMount() {
    
  };

  render() {
    const {menuList, match, addToCart } = this.props;
    const title = match.params.menuItem;
    const getListContent = (state, sectionName) => {
      return state.filter(item => item.section === sectionName);
    };
    const listContent = getListContent(menuList, title);

    return (
      <>
        <div className={styles.menu_content}>
          <ul className={styles.menu_content__list}>
            {listContent.map((item, index) => (
              <li key={index} className={styles.menu_content__item}>
                <div className={styles.menu_block}>
                  <div className={styles.menu_block__image}>
                    <img src={item.img_url} alt=""/>
                  </div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <span>$ {item.cost}</span>
                  <button className={styles.button} onClick={() => addToCart(item)}>Add to cart</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
