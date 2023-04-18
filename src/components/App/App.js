import React from 'react';
import {Route, Routes, Navigate } from 'react-router-dom';

import NavigationBar from '../NavigationBar';
import About from '../About/About'
import Projects from '../Projects/Projects';
import Footer from '../Footer';
import Notes from '../Notes/Notes';
import Calendar from '../Calendar/Calendar';
import Project from "../Project/Project";

function App() {

  return (
    <>
      <div className='container'> 
      <NavigationBar/>
        <Routes>
          {/* navigation */}
          <Route path="/" element={<About/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/projects" element={<Projects page={"list"}/>}></Route>
          <Route path="/notes" element={<Notes/>}></Route>
          <Route path="/calendar" element={<Calendar/>}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>

          {/* projects */}
          <Route path="/projects/griphint" element={<Project slug={"griphint"}/>}></Route>
          <Route path="/projects/vtaiwan" element={<Project slug={"vtaiwan"}/>}></Route>
          <Route path="/projects/po-network" element={<Project slug={"po-network"}/>}></Route>
      
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
