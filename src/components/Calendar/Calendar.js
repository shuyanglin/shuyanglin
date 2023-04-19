import React from "react";
import { Container, Row, Col } from 'react-grid-system';
import styles from './Calendar.module.css'

function Calendar() {
  return (
      <Container >
      <h1>Calendar</h1>
      <p>Here are some of the public or semi-public events on my calendar.</p>
      <Row className={styles.tableHeader}>
        <Col sm={2}>
          Date
        </Col>
        <Col sm={2}>
          Type
        </Col>
        <Col sm={3}>
          Topic
        </Col>
        <Col sm={3}>
          Organisation
        </Col>
        <Col sm={2}>
          Location
        </Col>
      </Row>
      <Row className={styles.row}>
        <Col sm={2}>
          2023.5.11
        </Col>
        <Col sm={2}>
          Workshop
        </Col>
        <Col sm={3}>
          Pol.is and Chat GPT workshop
        </Col>
        <Col sm={3}>
          <a href="https://www.northoftyne-ca.gov.uk">North of Tyne Combined Authority</a>
        </Col>
        <Col sm={2}>
        NTCA, UK
        </Col>
      </Row>
      <Row className={styles.row}>
        <Col sm={2}>
          2023.5.10
        </Col>
        <Col sm={2}>
          Presentation
        </Col>
        <Col sm={3}>
          Seminar 
        </Col>
        <Col sm={3}>
          <a href="https://www.oxford-aiethics.ox.ac.uk">Institute of Ethics in AI, Oxford University</a>
        </Col>
        <Col sm={2}>
        Oxford, UK
        </Col>
      </Row>
      <Row className={styles.row}>
        <Col sm={2}>
          2023.4.13-16
        </Col>
        <Col sm={2}>
          Workshop
        </Col>
        <Col sm={3}>
          AI for Institutional Design
        </Col>
        <Col sm={3}>
          <a href="http://cip.org/">Collective Intelligence Project</a> x <a href="https://www.cooperativeai.com/foundation">Cooperative AI Foundation </a>
        </Col>
        <Col sm={2}>
          Oxford, UK
        </Col>
      </Row>
      <Row className={styles.row}>
        <Col sm={2}>
          2023.4.5
        </Col>
        <Col sm={2}>
          Open Discussion
        </Col>
        <Col sm={3}>
          g0v#Da0 零激盪廣場第22次討論會議
        </Col>
        <Col sm={3}>
          <a href="https://darkmatterlabs.org/">DML</a> x <a href="https://da0.g0v.tw">g0v#Da0</a>
        </Col>
        <Col sm={2}>
          Online
        </Col>
      </Row>
      <Row className={styles.row}>
        <Col sm={2}>
          2023.3.23
        </Col>
        <Col sm={2}>
          Keynote
        </Col>
        <Col sm={3}>
          Design for Democratic Innovation in Taiwan
        </Col>
        <Col sm={3}>
          <a href="https://www.kcl.ac.uk">King’s College London</a>
        </Col>
        <Col sm={2}>
          London, UK
        </Col>
      </Row>
      <Row className={styles.row}>
        <Col sm={2}>
          2023.1.31
        </Col>
        <Col sm={2}>
          Presentation
        </Col>
        <Col sm={3}>
          Prototying Future Democracy
        </Col>
        <Col sm={3}>
          <a href="https://g0v.london">g0v London</a> x <a href="https://newspeak.house">Newspeak House</a>
        </Col>
        <Col sm={2}>
          London, UK
        </Col>
      </Row>
      <Row className={styles.row}>
        <Col sm={2}>
          2022.11.17-18
        </Col>
        <Col sm={2}>
          Presentation
        </Col>
        <Col sm={3}>
          Democracy in Taiwan: The People-Public-Private Partnership
        </Col>
        <Col sm={3}>
          <a href="https://koerber-stiftung.de/en/">Köerber Stiftung Foundation</a>
        </Col>
        <Col sm={2}>
          Hamburg, Germany
        </Col>
      </Row>
      </Container>
  );
}

export default Calendar;
