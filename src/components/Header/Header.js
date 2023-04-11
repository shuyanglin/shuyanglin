import React from "react";

import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.navbar}>
      <div className={styles.name}>
        <h2>Shuyang Lin</h2>
        <p>re:architect</p>
        
        </div>
        <div className={styles.tabs}>
          <span>Home</span>
          <span>About</span>
          <span>Talks</span>
          <span>Publications</span>
          <span>Calendar</span>
        </div>
      </nav>
    </div>
  );
}

export default Header;
