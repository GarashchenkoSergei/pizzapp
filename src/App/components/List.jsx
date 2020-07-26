import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../containers/Menu/store/duck';
import { getListContent } from '../containers/Menu/store/selectors';

const mapStateToProps = (state) => ({
  menuList: state.menuListReducer.menuList,
});
const mapDispatchToProps = (state) => ({});

class List extends Component {
  componentDidMount() {
    
  };

  render() {
    const {menuList} = this.props;
    const match = this.props.match;
    const title = match.params.menuItem;
    const getListContent = (state, sectionName) => {
      return state.filter(item => item.section === sectionName);
    };
    const listContent = getListContent(menuList, title);

    return (
      <>
        <div className="menu-content">
          <ul className="menu-content__list">
            {listContent.map((item, index) => (
              <li key={index} className="menu-content__item">
                <div>
                  <img src={item.img_url} alt=""/>
                </div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span>{item.cost}</span>
                <button>Add to cart</button>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
