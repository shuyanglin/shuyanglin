import React from "react";
import { Row, Col } from 'react-grid-system';
import styles from './Calendar.module.css'

function Calendar() {

  const commitment = [{
    date: '2023.5.11',
    type: 'Workshop',
    topic: 'Pol.is and Chat GPT workshop',
    organisation: 
    [{name:'North of Tyne Combined Authority', link: "https://www.northoftyne-ca.gov.uk"}],
    location: 'NTCA, UK'
  },{
    date: '2023.5.10',
    type: 'Presentation',
    topic: 'Seminar',
    organisation: [{name:'Institute of Ethics in AI, Oxford University', link: "https://www.oxford-aiethics.ox.ac.uk"}],
    location: 'Oxford, UK'
  },{
    date: '2023.4.13-16',
    type: 'Workshop',
    topic: 'AI for Institutional Design',
    organisation: [{name: 'Collective Intelligence Project', link: "http://cip.org/"}, {name: 'Cooperative AI Foundation', link:"https://www.cooperativeai.com/foundation"}],
    location: 'Oxford, UK'
  },{
    date: '2023.4.5',
    type: 'Open Discussion',
    topic: 'g0v#Da0 零激盪廣場第22次討論會議',
    organisation: [{name: 'DML', link: "https://darkmatterlabs.org/"}, {name: 'g0v#Da0', link:"https://da0.g0v.tw"}],
    location: 'Online'
  },{
    date: '2023.3.23',
    type: 'Presentation',
    topic: 'Design for Democratic Innovation in Taiwan',
    organisation: [{name: 'King’s College London', link: "https://www.kcl.ac.uk"}],
    location: 'London, UK'
  },{
    date: '2023.1.31',
    type: 'Presentation',
    topic: 'Prototying Future Democracy',
    organisation: [{name: 'g0v London', link: "https://g0v.london"}, {name: 'Newspeak House', link: "https://newspeak.house"}],
    location: 'London, UK'
  },{
    date: '2022.11.17-18',
    type: 'Keynote',
    topic: 'Democracy in Taiwan: The People-Public-Private Partnership',
    organisation: [{name: 'Köerber Stiftung Foundation', link: "https://koerber-stiftung.de/"}],
    location: 'Hamburg, Germany'
  }];

  console.log(commitment);
  
  return (
      <>
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
        
          {commitment.map((item) => { 
            return (
              <Row className={styles.row}>
                <Col sm={2}> <div className={styles.date}>  {item.date}</div> </Col>
                <Col sm={2}> {item.type} </Col>
                <Col sm={3}> {item.topic} </Col>
                <Col sm={3}> {item.organisation.map((org)=>{
                      return(
                        <div>
                          <a href={org.link}>{org.name}</a>
                        </div>
                      )})} </Col>
                <Col sm={2}> {item.location} </Col>
              </Row>
            )
          })}
      </>
  );
}

export default Calendar;
