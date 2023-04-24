import React from "react";
import {Link} from 'react-router-dom';
import {FaTimes, FaBars} from 'react-icons/fa'
import styles from './NavigationBar.module.css';
import "../../Styles/main.css"

function Header() {

  const [isResponsive, setIsResponsive] = React.useState();

  const navStyle = "responsiveNav";
  function toggleNavbar(){
    setIsResponsive(!isResponsive);
  }

  return (
    <header>
      <div>
        <h2>Shu Yang Lin</h2>
        <p>re:architect</p>
      </div>
      <nav className={isResponsive?navStyle:undefined}>
        <Link to="/about" onClick={toggleNavbar}>About</Link>
        <Link to="/projects" onClick={toggleNavbar}>Projects</Link>
        <Link to="/notes">Weekly Notes</Link>
        <Link to="/calendar" onClick={toggleNavbar}>Calendar</Link>
        <button className={`${styles.navBtn} ${styles.navCloseBtn}`} onClick={toggleNavbar}>
          <FaTimes/>
        </button>
      </nav>
      <button className={styles.navBtn} onClick={toggleNavbar}>
        <FaBars/>
      </button>
    </header>
  );
}

export default Header;
