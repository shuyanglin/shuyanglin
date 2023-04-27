import React from "react";
import { Row, Col } from 'react-grid-system';
import styles from './Calendar.module.css'

function Calendar() {

  const commitment = [{
    date: '2023.9.4-10',
    type: 'Exhibition',
    topic: 'Who owns the truth?',
    organisation: 
    [{name:'Ars Eletronica', link: "https://ars.electronica.art/festival/en/"}],
    location: 'Linz, Austria'
  },{
    date: '2023.5.13',
    type: 'Workshop',
    topic: 'Who owns the river Don?',
    organisation: 
    [{name:'The River Dôn Project', link: "https://www.theriverdon.org"}, {name:'DML', link: "https://darkmatterlabs.org"}, {name:'Lawyers for Nature', link: "https://www.lawyersfornature.com"}, {name:'Friends of the Cam', link: "https://www.friendsofthecam.org"}],
    location: 'Sheffield, UK'
  },{
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
    topic: 'AI for Institutions',
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
  },{
    date: '2021.1.13',
    type: 'Presentation',
    topic: 'CIID open lecture 2021',
    organisation: [{name: 'Copenhagen Institute of Interaction Design (CIID)', link: "https://ciid.dk"}],
    location: 'Online'
  },{
    date: '2020.6.17',
    type: 'Presentation',
    topic: 'Digital Lightning Talks',
    organisation: [{name: 'Copenhagen Institute of Interaction Design (CIID)', link: "https://ciid.dk"}],
    location: 'Online'
  },{
    date: '2020.5.25-6.16',
    type: 'Workshop',
    topic: 'Managing a gender responsive ADMS',
    organisation: [{name: 'Digital Future Society (DFS)', link: "https://digitalfuturesociety.com/"}],
    location: 'Online'
  },{
    date: '2019.11.6',
    type: 'Presentation',
    topic: 'Prototying Future Democracy ',
    organisation: [{name: 'FWD50', link: "https://2021.fwd50.com/"}],
    location: 'Toronto, Canada'
  },{
    date: '2019.9.16-17',
    type: 'Presentation',
    topic: 'EmpoderaLIVE ',
    organisation: [{name: 'Fundación Cibervoluntarios', link: "www.cibervoluntarios.org"}],
    location: 'Malaga, Spain'
  },{
    date: '2019.6.3',
    type: 'Presentation',
    topic: 'Democratic innovations in Taiwan',
    organisation: [{name: 'Democracy Accelerator', link: "https://www.democraticinnovations.com/about/"}],
    location: ' Helsinki, Finland'
  },{
    date: '2018.11.5-17',
    type: 'Hackathon',
    topic: 'Collective Intelligence for Democracy',
    organisation: [{name: 'Medialab-prado', link: "https://medialab-prado.es"}],
    location: 'Madrid, Spain'
  },{
    date: '2018.10.29-30',
    type: 'Presentation',
    topic: 'Renovation of Innovation',
    organisation: [{name: 'Future Innovation Forum 2018', link: "http://www.seoulfif.co.kr/en/"},{name: 'Seoul Metropolitan Government', link: "https://english.seoul.go.kr"}],
    location: 'Seoul, Korea'
  },{
    date: '2018.9.4-5',
    type: 'Presentation',
    topic: 'Broken Promise Land',
    organisation: [{name: 'The Conference', link: "https://2018.theconference.se/"}],
    location: 'Malmö, Sweden'
  },{
    date: '2018.8.29',
    type: 'Presentation',
    topic: 'Prototying The Future Of Democracy',
    organisation: [{name: 'Above All Humans (AAH)', link: "https://www.aboveallhuman.co"}],
    location: 'Melbourne, Australia'
  },{
    date: '2018.7.26-27',
    type: 'Presentation',
    topic: 'Open Co-op conference',
    organisation: [{name: 'Open Cooperatives', link: "https://2018.open.coop"}],
    location: 'London, UK'
  },{
    date: '2018.7.17-18',
    type: 'Presentation',
    topic: 'International Design in Government Conference',
    organisation: [{name: 'International Design in Government', link: "https://international.gov-design.com/"}],
    location: 'London, UK'
  },{
    date: '2018.7.16',
    type: 'Workshop',
    topic: 'OneTeamGov Global Conference',
    organisation: [{name: 'OneTeamGov', link: "https://www.oneteamgov.uk"}],
    location: 'London, UK'
  },{
    date: '2018.6.7-8',
    type: 'Workshop',
    topic: 'PO, vTaiwan & Holopolis',
    organisation: [{name: 'Personal Democracy Forum', link: "https://www.youtube.com/@personaldemocracy"}],
    location: 'New York, UK'
  },{
    date: '2018.5.12',
    type: 'Presentation',
    topic: 'A Call for Collaboration',
    organisation: [{name: 'TEDxNCTU', link: "https://www.ted.com/tedx/events/10477"}],
    location: 'Hsinchu, Taiwan'
  },{
    date: '2018.3.13-17',
    type: 'Workshop',
    topic: 'CrowdLaw',
    organisation: [{name: 'The GovLab', link: "https://www.ted.com/tedx/events/10477"}],
    location: 'Belagio, Italy'
  },{
    date: '2017.9.2-8',
    type: 'Presentation',
    topic: 'Our Urban Future',
    organisation: [{name: 'Grinnell College', link: "https://www.grinnell.edu"}],
    location: 'Grinnell, Iowa, US'
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
