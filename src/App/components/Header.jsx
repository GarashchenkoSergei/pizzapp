import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

class Header extends Component {
  render() {
    return (
      <>
        <header className={styles.header}>
          <div className={`${styles.topbar} container`}>
            <div className={styles.logo}>
              <img src="/images/logo.png" alt="logo"/>
            </div>
            <div className={styles.topbar_nav}>
              <ul className={styles.topbar__list}>
                <li className={styles.topbar__item}>
                  <Link className={styles.topbar__link} to="/menu">
                    <div className={styles.topbar__link_icon}>
                      <img src="/images/shell.png" alt="shell icon"/>
                    </div>
                    <span className={styles.topbar__link_text}>Menu</span>
                  </Link>
                </li>
                <li className={styles.topbar__item}>
                  <Link className={styles.topbar__link} to="/user">
                    <div className={styles.topbar__link_icon}>
                      <img src="/images/shred.png" alt="shreder icon"/>
                    </div>
                    <span className={styles.topbar__link_text}>User</span>
                  </Link>
                </li>
                <li className={styles.topbar__item}>
                  <Link className={styles.topbar__link} to="/cart">
                    <div className={styles.topbar__link_icon}>
                      <img src="/images/chaki.png" alt="nunchaki icon"/>
                    </div>
                    <span className={styles.topbar__link_text}>Cart</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </>
    )
  }
}

export default Header;