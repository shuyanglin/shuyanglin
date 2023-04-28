import React from "react";
import { Container, Row, Col } from 'react-grid-system';
import hero from '../../assets/memoji.jpg';
import styles from './About.module.css';
function About() {
  return (
  
  <Container>
    <Row>
      <Col lg={4} sm={12}>
        <img className={styles.memoji} alt="about shu" src={hero}></img>
      </Col>
      <Col lg={8} sm={12}>
      <p>
        Hi there, I am Shu, an independent re:architect. I have a passion for building consensus on a large scale. My specialty is designing interactions and discovering elegant solutions through an iteractive process of creating and testing protoypes that foster digital democracy. With today’s technology, I believe we can find consensus on a national scale.
      </p>
      <p>
        I am currently working on a joint project between the <a href="https://moda.gov.tw/">Ministry of Digital Affairs of the Taiwanese government</a> and <a href="https://darkmatterlabs.org/">Dark Matter Laboratories</a>. 
      </p>
      <p>In my free time, I enjoy jogging, cooking, and coding.</p>
      
      <h3>Background</h3>
      <p>
        I am a double master's holder in Human Computer Interaction from National Taiwan University and Interaction Design from Copenhagen Institute of Interaction Design. In 2016, I co-founded <a href="http://pdis.tw" target="_blank" rel="noreferrer">PDIS</a> alongside Minister without portfolio Audrey Tang, an innovation lab in the Taiwanese government that focuses on open government, social innovation and youth council. 
        PDIS re-architects channels for civic engagements, including establishing <a href="https://po.pdis.tw/en/">cross-ministerial policy-making process</a>, collaborating with grassroots civic tech communities on <a href="http://vtaiwan.tw/">digital regulatory reforms</a>, and supporting the operation of <a href="https://silab.sme.gov.tw" target="_blank">a social innovation lab</a>.  Since the launch of the Ministry of Digital Affairs (MODA) in 2022, PDIS continues to work on public code for digital reselience under the lead of Digital Minister Audrey Tang.
      </p>
      <p>
      Our work has been widely recognized, with features in prominent media outlets such as <a href="https://www.nytimes.com/2019/10/15/opinion/taiwan-digital-democracy.html">The New York Times</a>, <a href="https://www.theguardian.com/world/2020/sep/27/taiwan-civic-hackers-polis-consensus-social-media-platform">The Guardian</a> and <a href="https://www.technologyreview.com/2018/08/21/240284/the-simple-but-ingenious-system-taiwan-uses-to-crowdsource-its-laws/">MIT Technology Review</a>. I have also spoken at various speaking arrangements, including Open-Source Institutions Talks, <a href="https://www.youtube.com/watch?v=GRovRIcdxJA">The Conference</a>, <a href="https://www.youtube.com/watch?v=8Gr5Y0XhEFI">Above All Humans</a>, Ciudades Democráticas, <a href="https://www.youtube.com/watch?v=3oosyClc_FQ">Forum Offene Stadt</a>, and awarded with <a href="https://vimeo.com/254889243/2c5a8a49a4?fbclid=IwAR2ncEyMOxnRmSv8wF9oonIWtN-BxRqHSdlRLEeRvqFpsA_ctYg62oyofAo">Future Voices in IxDA</a>.
      </p>
      </Col> 
    </Row>

  </Container>  
  
  );
}

export default About;
