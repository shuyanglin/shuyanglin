import React from "react";

import styles from './NavigationBar.module.css';

function Header() {
  return (
    <header>
      <h3>Shu Yang Lin</h3>
      <nav>
        <a href="/#">About</a>
        <a href="/#">Projects</a>
        <a href="/#">Weekly Notes</a>
        <a href="/#">Talks</a>
        <a href="/#">Workshops</a>
        <a href="/#">Calendar</a>
        <button></button>
      </nav>
    </header>
  );
}

export default Header;
