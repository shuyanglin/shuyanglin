import React from "react";
import { Container, Row, Col } from 'react-grid-system';
import hero from '../../assets/shu_about.jpg';
import styles from './About.module.css';
function About() {
  return (
  <>
    
    <Container>
    <Row>
     
      <Col sm={12}>
      <section>
      
      <img alt="about shu" src={hero}></img>
      <div className={styles.description}>
        Shu Yang Lin is a re:architect who is passionate about large-scale consensus finding. Through her work with Digital Minister Audrey Tang in the government of Taiwan, Shu creates interfaces that tangibly demonstrate the broad potential of human and AI interactions. As AI becomes increasingly prevalent in our lives, Shu has dedicated herself to surfacing important questions surrounding the representation of non-humans through conversational AI in the context of policy-making processes, in order to achieve optimal outcomes for the planet. By tangibly demonstrating the possibilities and limitations of human-AI cooperation, she hopes to inspire new ways of thinking about the intersection of technology and humanity.
      </div>
        
      </section>
      </Col> 
    </Row>
    <Row>
      <Col lg={2} sm={1}>
      </Col>  
      <Col lg={8} sm={10}>
      <p>
      Shu Yang Lin is a re:architect based in London. She is currently working on a joint project between the <a href="https://moda.gov.tw/">Ministry of Digital Affairs</a> and <a href="https://darkmatterlabs.org/">Dark Matter Laboratories</a>. 
      Working in the field between HCI and interaction design she design interactions to explore the creative potentials machine-supported consensus finding.
      She has presented at Open-Source Institutions Talks, The Conference, Above All Humans, Ciudades Democráticas, Forum Offene Stadt, and awarded with Future Voices in IxDA.
      </p>
      <br/>
      <p>
      Shu Yang Lin holds double master's degrees in computer science from National Taiwan University and interaction design from Copenhagen Institute of Interaction Design. Currently, she is part of the team at <a href="http://pdis.tw" target="_blank" rel="noreferrer">PDIS</a>, an innovation lab in the central government of Taiwan that works on open government, social innovation and youth council. The lab provides channels for civic engagements, establishes <a href="https://po.pdis.tw/en/">cross-ministerial policy making process</a>, collaborates with grassroots civic tech communities on <a href="http://vtaiwan.tw/">digital regulatory reforms</a>, and supports the operation of <a href="https://silab.sme.gov.tw" target="_blank">social innovation lab</a>.
      </p>
      <br/>
      <p>
      When not at work, she enjoys jogging along river banks, cooking perfect soft boiled eggs and browsing Brackeys Unity tutorials.
      </p>
      </Col>
      
    </Row>
  </Container>  
  </>
  );
}

export default About;
