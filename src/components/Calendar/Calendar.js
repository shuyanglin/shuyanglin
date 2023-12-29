import React from "react";
import { Row, Col } from 'react-grid-system';
import styles from './Calendar.module.css'

function Calendar() {

  const commitment = [{
    date: '2024.1.29-2.4',
    type: 'Offsite',
    topic: '1522 Offsite',
    organisation:
      [{ name: '1522', link: "" }],
    location: 'Tokyo, JP'
  }, {
    date: '2024.1.17',
    type: 'Hackathon',
    topic: 'vTaiwan Hackathon',
    organisation:
      [{ name: 'vTaiwan', link: "https://info.vtaiwan.tw" }],
    location: 'Taipei, TW'
  }, {
    date: '2024.1.9-14',
    type: 'Offsite',
    topic: 'DML Offsite',
    organisation:
      [{ name: 'DML', link: "https://darkmatterlabs.org" }],
    location: 'Amsterdam, NL'
  }, {
    date: '2023.11.11-12',
    type: 'Offsite',
    topic: '1522 Offsite',
    organisation:
      [{ name: '1522', link: "" }],
    location: 'Margate, UK'
  }, {
    date: '2023.11.3',
    type: 'Unconference',
    topic: 'Beyond Culture',
    organisation:
      [{ name: 'DML', link: "https://darkmatterlabs.org" }, { name: 'RxC', link: "https://www.radicalxchange.org/" }, { name: 'Serpentine', link: "https://www.serpentinegalleries.org/" }],
    location: 'London, UK'
  }, {
    date: '2023.10.23-27',
    type: 'Pop-Up Studio',
    topic: 'Civic Tech Pop-Up Studio',
    organisation:
      [{ name: 'DML', link: "https://darkmatterlabs.org" }],
    location: 'Berlin, Germany'
  }, {
    date: '2023.10.15',
    type: 'Hackathon',
    topic: 'g0v hackathon',
    organisation:
      [{ name: 'g0v', link: "https://g0v.tw/" }],
    location: 'Taipei, Taiwan'
  }, {
    date: '2023.10.5',
    type: 'Hackathon',
    topic: 'Multigenerational Participation: Building a Resilient Structure for Internet Governance Communities in Taiwan',
    organisation:
      [{ name: '台灣網路治理論壇 (TWIGF)', link: "https://www.igf.org.tw" }],
    location: 'Taipei, Taiwan'
  }, {
    date: '2023.9.24',
    type: 'Consultation',
    topic: 'OpenAI x vTaiwan: Bridging Recursive Public',
    organisation:
      [{ name: 'OpenAI', link: "https://openai.com/" }, { name: 'vTaiwan', link: "https://info.vtaiwan.tw/" }],
    location: 'Taipei, Taiwan'
  }, {
    date: '2023.9.15',
    type: 'Launching event',
    topic: 'BRAID (Bridging Responsible AI Divides)',
    organisation:
      [{ name: 'BRAID', link: "https://braiduk.org" }, { name: 'UKRI', link: "https://www.ukri.org/blog/how-the-arts-and-humanities-are-crucial-to-responsible-ai/" }, { name: 'BBC', link: "https://www.bbc.co.uk" },],
    location: 'London, UK'
  }, {
    date: '2023.9.14',
    type: 'Rountable',
    topic: 'Data Equity & Governance in AI',
    organisation:
      [{ name: 'Chatham House', link: "https://www.chathamhouse.org" }],
    location: 'London, UK'
  }, {
    date: '2023.8.4',
    type: 'Interview',
    topic: 'Institutionalising democratic innovations, lessons from vTaiwan',
    organisation:
      [{ name: 'Nesta', link: "https://www.nesta.org.uk" }],
    location: 'Online'
  }, {
    date: '2023.7.12',
    type: 'Workshop',
    topic: 'Collective Intelligence: Putting people at the heart of policy-making',
    organisation:
      [{ name: 'Demos', link: "https://demos.co.uk" }],
    location: 'London, UK'
  }, {
    date: '2023.6.21',
    type: 'Workshop',
    topic: 'Re-declaring the rights of the river Cam',
    organisation:
      [{ name: 'Friends of the Cam', link: "https://www.friendsofthecam.org/content/re-declaring-rights-river-cam" }],
    location: 'Cambridge, UK'
  }, {
    date: '2023.6.15',
    type: 'Workshop',
    topic: 'Changing Course: transforming water system decision-making post 2043',
    organisation:
      [{ name: 'CaBa', link: "https://catchmentbasedapproach.org" }, { name: 'Policy Lab', link: "https://openpolicy.blog.gov.uk" }, { name: 'DeFra Futures', link: "https://www.gov.uk/government/groups/futures-and-foresight" }],
    location: 'London, UK'
  }, {
    date: '2023.5.16-18',
    type: 'Offsite',
    topic: 'DML Offsite',
    organisation:
      [{ name: 'DML', link: "https://darkmatterlabs.org" }],
    location: 'East Sussex, UK'
  }, {
    date: '2023.5.13',
    type: 'Workshop',
    topic: 'Who owns the river Dôn?',
    organisation:
      [{ name: 'The River Dôn Project', link: "https://www.theriverdon.org" }, { name: 'DML', link: "https://darkmatterlabs.org" }, { name: 'Lawyers for Nature', link: "https://www.lawyersfornature.com" }, { name: 'Friends of the Cam', link: "https://www.friendsofthecam.org" }],
    location: 'Sheffield, UK'
  }, {
    date: '2023.5.11',
    type: 'Workshop',
    topic: 'Pol.is and Chat GPT workshop',
    organisation:
      [{ name: 'North of Tyne Combined Authority', link: "https://www.northoftyne-ca.gov.uk" }],
    location: 'NTCA, UK'
  }, {
    date: '2023.5.10',
    type: 'Presentation',
    topic: 'Seminar',
    organisation: [{ name: 'Institute of Ethics in AI, Oxford University', link: "https://www.oxford-aiethics.ox.ac.uk" }],
    location: 'Oxford, UK'
  }, {
    date: '2023.4.13-16',
    type: 'Workshop',
    topic: 'AI for Institutions',
    organisation: [{ name: 'Collective Intelligence Project', link: "http://cip.org/" }, { name: 'Cooperative AI Foundation', link: "https://www.cooperativeai.com/foundation" }],
    location: 'Oxford, UK'
  }, {
    date: '2023.4.5',
    type: 'Open Discussion',
    topic: 'g0v#Da0 零激盪廣場第22次討論會議',
    organisation: [{ name: 'DML', link: "https://darkmatterlabs.org/" }, { name: 'g0v#Da0', link: "https://da0.g0v.tw" }],
    location: 'Online'
  }, {
    date: '2023.3.23',
    type: 'Presentation',
    topic: 'Design for Democratic Innovation in Taiwan',
    organisation: [{ name: 'King’s College London', link: "https://www.kcl.ac.uk" }],
    location: 'London, UK'
  }, {
    date: '2023.1.31',
    type: 'Presentation',
    topic: 'Prototying Future Democracy',
    organisation: [{ name: 'g0v London', link: "https://g0v.london" }, { name: 'Newspeak House', link: "https://newspeak.house" }],
    location: 'London, UK'
  }, {
    date: '2022.11.17-18',
    type: 'Keynote',
    topic: 'Democracy in Taiwan: The People-Public-Private Partnership',
    organisation: [{ name: 'Köerber Stiftung Foundation', link: "https://koerber-stiftung.de/" }],
    location: 'Hamburg, Germany'
  }, {
    date: '2021.1.13',
    type: 'Presentation',
    topic: 'CIID open lecture 2021',
    organisation: [{ name: 'Copenhagen Institute of Interaction Design (CIID)', link: "https://ciid.dk" }],
    location: 'Online'
  }, {
    date: '2020.6.17',
    type: 'Presentation',
    topic: 'Digital Lightning Talks',
    organisation: [{ name: 'Copenhagen Institute of Interaction Design (CIID)', link: "https://ciid.dk" }],
    location: 'Online'
  }, {
    date: '2020.5.25-6.16',
    type: 'Workshop',
    topic: 'Managing a gender responsive ADMS',
    organisation: [{ name: 'Digital Future Society (DFS)', link: "https://digitalfuturesociety.com/" }],
    location: 'Online'
  }, {
    date: '2019.11.6',
    type: 'Presentation',
    topic: 'Prototying Future Democracy ',
    organisation: [{ name: 'FWD50', link: "https://2021.fwd50.com/" }],
    location: 'Toronto, Canada'
  }, {
    date: '2019.9.16-17',
    type: 'Presentation',
    topic: 'EmpoderaLIVE ',
    organisation: [{ name: 'Fundación Cibervoluntarios', link: "www.cibervoluntarios.org" }],
    location: 'Malaga, Spain'
  }, {
    date: '2019.6.3',
    type: 'Presentation',
    topic: 'Democratic innovations in Taiwan',
    organisation: [{ name: 'Democracy Accelerator', link: "https://www.democraticinnovations.com/about/" }],
    location: ' Helsinki, Finland'
  }, {
    date: '2018.11.5-17',
    type: 'Hackathon',
    topic: 'Collective Intelligence for Democracy',
    organisation: [{ name: 'Medialab-prado', link: "https://medialab-prado.es" }],
    location: 'Madrid, Spain'
  }, {
    date: '2018.10.29-30',
    type: 'Presentation',
    topic: 'Renovation of Innovation',
    organisation: [{ name: 'Future Innovation Forum 2018', link: "http://www.seoulfif.co.kr/en/" }, { name: 'Seoul Metropolitan Government', link: "https://english.seoul.go.kr" }],
    location: 'Seoul, Korea'
  }, {
    date: '2018.9.4-5',
    type: 'Presentation',
    topic: 'Broken Promise Land',
    organisation: [{ name: 'The Conference', link: "https://2018.theconference.se/" }],
    location: 'Malmö, Sweden'
  }, {
    date: '2018.8.29',
    type: 'Presentation',
    topic: 'Prototying The Future Of Democracy',
    organisation: [{ name: 'Above All Humans (AAH)', link: "https://www.aboveallhuman.co" }],
    location: 'Melbourne, Australia'
  }, {
    date: '2018.7.26-27',
    type: 'Presentation',
    topic: 'Open Co-op conference',
    organisation: [{ name: 'Open Cooperatives', link: "https://2018.open.coop" }],
    location: 'London, UK'
  }, {
    date: '2018.7.17-18',
    type: 'Presentation',
    topic: 'International Design in Government Conference',
    organisation: [{ name: 'International Design in Government', link: "https://international.gov-design.com/" }],
    location: 'London, UK'
  }, {
    date: '2018.7.16',
    type: 'Workshop',
    topic: 'OneTeamGov Global Conference',
    organisation: [{ name: 'OneTeamGov', link: "https://www.oneteamgov.uk" }],
    location: 'London, UK'
  }, {
    date: '2018.6.7-8',
    type: 'Workshop',
    topic: 'PO, vTaiwan & Holopolis',
    organisation: [{ name: 'Personal Democracy Forum', link: "https://www.youtube.com/@personaldemocracy" }],
    location: 'New York, UK'
  }, {
    date: '2018.5.12',
    type: 'Presentation',
    topic: 'A Call for Collaboration',
    organisation: [{ name: 'TEDxNCTU', link: "https://www.ted.com/tedx/events/10477" }],
    location: 'Hsinchu, Taiwan'
  }, {
    date: '2018.3.13-17',
    type: 'Workshop',
    topic: 'CrowdLaw',
    organisation: [{ name: 'The GovLab', link: "https://www.ted.com/tedx/events/10477" }],
    location: 'Belagio, Italy'
  }, {
    date: '2017.9.2-8',
    type: 'Presentation',
    topic: 'Our Urban Future',
    organisation: [{ name: 'Grinnell College', link: "https://www.grinnell.edu" }],
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
            <Col sm={3}> {item.organisation.map((org) => {
              return (
                <div>
                  {org.link ? <a href={org.link}>{org.name}</a> : org.name}
                </div>
              )
            })} </Col>
            <Col sm={2}> {item.location} </Col>
          </Row>
        )
      })}
    </>
  );
}

export default Calendar;
