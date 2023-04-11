import React from "react";
import {FaTimes, FaBars} from 'react-icons/fa'
import styles from './NavigationBar.module.css';
import "../../Styles/main.css"

function Header() {

  const [isResponsive, setIsResponsive] = React.useState();

  const navStyle = "responsiveNav";
  function showNavbar(){
    setIsResponsive(!isResponsive);
  }

  return (
    <header>
      <div>
        <h3>Shu Yang Lin</h3>
        <p>re:architect</p>
      </div>
      <nav className={isResponsive?navStyle:undefined}>
        <a href="/#">About</a>
        <a href="/#">Projects</a>
        <a href="/#">Weekly Notes</a>
        <a href="/#">Calendar</a>
        <button className={`${styles.navBtn} ${styles.navCloseBtn}`} onClick={showNavbar}>
          <FaTimes/>
        </button>
      </nav>
      <button className={styles.navBtn} onClick={showNavbar}>
        <FaBars/>
      </button>
    </header>
  );
}

export default Header;
