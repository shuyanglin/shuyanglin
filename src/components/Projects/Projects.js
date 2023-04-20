import React from "react";
import { Row, Col } from 'react-grid-system';
import styles from './Projects.module.css'
import griphintImgSrc from '../../assets/griphint-cover.jpg'
import poImgSrc from '../../assets/po-network-cover.png'
import vtaiwanImgSrc from '../../assets/vtaiwan-cover.png'
import {Link} from 'react-router-dom';


function Projects({page}) {
  const featured_projects = [{
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
  }];

  const other_projects = [{
    slug: "griphint",
    title: "Griphint", 
    imgSrc: griphintImgSrc, 
    description: "Handwriting Tool for Children with Sensory Integration Difficulties",
    category: "EdTech Product Startup"
  }]
  
  return (
    <>
    <div className={styles.projects}>
      <h1>Fetured Projects</h1>
      <p>Here are some featured projects that showcase the work of PDIS.</p>
      {page=="list" &&
          <Row> 
          { featured_projects.map( proj => { return (
            
              <Col xl={6} lg={12}>
                <Link to={`/projects/${proj.slug}`}>
                  <Card imgSrc={proj.imgSrc} title={proj.title} description={proj.description}/>
                </Link>
              </Col>
            
          )})}
          </Row>
      }    
    </div>
    <div className={styles.projects}>
    <h1>Other Projects</h1>
    <p>Here are some other projects that I enjoyed working on in my past experience.</p>
    {page=="list" &&
        <>
        { other_projects.map( proj => { return (
          <Row> 
            <Col xl={6} lg={12}>
              <Link to={`/projects/${proj.slug}`}>
                <Card imgSrc={proj.imgSrc} title={proj.title} description={proj.description}/>
              </Link>
            </Col>
          </Row>
          )})}
        </>
    }    
  </div>
  </>
    
  );
}

function Card({imgSrc, title, description}){
  return (
    <div className={styles.card}>
      <img src={imgSrc}/>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Projects;
