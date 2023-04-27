import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import {Link} from 'react-router-dom';
import styles from './Footer.module.css';
import {FaGithub, FaTwitter, FaInstagram} from 'react-icons/fa';

function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
      <h3>Shu Yang Lin</h3>
      <p>re:architect</p>
      
        <Row className={styles.footerTabs}>
          <Col xxl={2} xl={1} lg={2} md={3} sm={3} xs={12}>
            <Link to="/about">About</Link>
          </Col>
          <Col xxl={2} xl={1} lg={2} md={3} sm={3} xs={12}>
            <Link to="/projects">Projects</Link>
          </Col>
          <Col xxl={2} xl={1} lg={2} md={3} sm={3} xs={12}>
            <Link to="/notes">Notes</Link>
          </Col>
          <Col xxl={2} xl={1} lg={2} md={3} sm={3} xs={12}>
            <Link to="/calendar">Calendar</Link>
          </Col>
        </Row>
      
        <Row className={styles.socialTabs}>
          <Col xl={0.5} lg={1} md={1} sm={2} xs={1.5}>
          <a href="https://github.com/shuyanglin"><FaGithub/></a>
          </Col>
          <Col xl={0.5} lg={1} md={1} sm={2} xs={1.5}>
            <a href="https://twitter.com/shuyanglin"><FaTwitter/></a>
          </Col>
          <Col xl={0.5} lg={1} md={1} sm={2} xs={1.5}>
          <a href="https://www.instagram.com/shuyanglintw/"><FaInstagram/></a>
          </Col>
        </Row>
      </Container>

    
    </footer>
  );
}

export default Footer;
