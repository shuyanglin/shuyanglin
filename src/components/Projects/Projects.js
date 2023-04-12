import React from "react";
import { Container, Row, Col } from 'react-grid-system';
import styles from './Projects.module.css'
import griphintImgSrc from '../../assets/griphint-cover.jpg'
import poImgSrc from '../../assets/po-network-cover.png'
import vtaiwanImgSrc from '../../assets/vtaiwan-cover.png'
import {Link} from 'react-router-dom';


function Projects({page}) {
  const project = [{
    slug: "po-network",
    title: "Participation Officer Network",
    imgSrc: poImgSrc,
    description: "Bring relevant ministries to citizens",
    category: "Public Service"
  },{
    slug: "vtaiwan",
    title: "vTaiwan",
    imgSrc: vtaiwanImgSrc,
    description: "Digital Regulatory Reform",
    category: "Civic Space"
  },{
    slug: "griphint",
    title: "Griphint", 
    imgSrc: griphintImgSrc, 
    description: "Handwriting Tool for Children with Sensory Integration Difficulties",
    category: "EdTech Product Startup"

  }];
  
  return (
    <> 
      



      <h1>Projects</h1>
      <Container className={styles.container}>
      {page=="list" &&
          <>
          { project.map( proj => { return (
            <Row> 
              <Col lg={12}>
                <Link to={`/projects/${proj.slug}`}>
                  <Card imgSrc={proj.imgSrc} title={proj.title} description={proj.description}/>
                </Link>
              </Col>
            </Row>
            )})}
          </>
      }
      


      </Container>
    
    </>
  );
}

function Card({imgSrc, title, description}){
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={imgSrc}/>
      
    </div>
  )
}

export default Projects;
