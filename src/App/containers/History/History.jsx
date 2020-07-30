import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from './store/duck';
import styles from './History.module.css'

const mapStateToProps = (state) => ({
  historyList: state.historyListReducer.historyList,
});

const mapDispatchToProps = (dispatch) => ({
  receiveHistoryList: (value) => dispatch(actions.receiveHistoryList(value)),
});

class History extends Component {
  componentDidMount() {
    const { receiveHistoryList } = this.props;
    receiveHistoryList();
  }

  render() {
    const {historyList} = this.props;
    return ( 
      <>
        <div>
          <ul className={styles.history__list}>
            {historyList.map((item, index) => (
              <li key={index} className={styles.history__item}>
                <p>Order id: {item.orderId}</p>
                <p>Order date: {item.date}</p>
                <p>Order date: {item.details}</p>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(History);