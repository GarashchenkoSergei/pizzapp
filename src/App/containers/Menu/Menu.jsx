import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import List from '../../components/List';
import { connect } from 'react-redux';
import { actions } from './store/duck';
import { getMenuSections } from './store/selectors';

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
        <div className="main-menu">
          <ul className="topbar-nav__list">
            {menuSections.map((item, index) => (
              <li key={index} className="topbar-nav__item">
                <Link to={`/menu/${item}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="main-content">
          <Route path={`/menu/:menuItem`} component={List} />
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);