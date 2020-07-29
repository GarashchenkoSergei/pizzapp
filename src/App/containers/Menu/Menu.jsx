import React, { Component } from 'react';
import { Redirect, Route, NavLink } from 'react-router-dom';
import List from '../../components/List';
import { connect } from 'react-redux';
import { actions } from './store/duck';
import { getMenuSections } from './store/selectors';
import styles from './Menu.module.css'

const mapStateToProps = (state) => ({
  menuList: state.menuListReducer.menuList,
  menuSections: getMenuSections(state.menuListReducer.menuList),
});

const mapDispatchToProps = (dispatch) => ({
  receiveMenuList: (value) => dispatch(actions.receiveMenuList(value)),
});

class Menu extends Component {
  componentDidMount() {
    const { receiveMenuList } = this.props;
    receiveMenuList();
  }

  render() {
    const { menuSections } = this.props;

    return ( 
      <>
        <div className={styles.main_menu}>
          <ul className={styles.menu_nav__list}>
            {menuSections.map((item, index) => (
              <li key={index} className={styles.menu_nav__item}>
                <NavLink activeClassName="active" to={`/menu/${item}`}>{item}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="main-content">
          <Route path={`/menu/:menuItem`} component={List} />
          <Redirect from="/menu" to="/menu/pizza"/>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);