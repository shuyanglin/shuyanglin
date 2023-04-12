import React from 'react';
import {Route, Routes, Navigate } from 'react-router-dom';

import NavigationBar from '../NavigationBar';
import About from '../About/About'
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import Footer from '../Footer';
import Notes from '../Notes/Notes';
import Calendar from '../Calendar/Calendar';
import Project from "../Project/Project";

function App() {

  return (
    <>
      <NavigationBar/>
      <div className='container'> 
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/projects" element={<Projects page={"list"}/>}></Route>
          <Route path="/notes" element={<Notes/>}></Route>
          <Route path="/calendar" element={<Calendar/>}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>

 
          <Route path="/projects/griphint" element={<Project name={"griphint"}/>}></Route>
          <Route path="/projects/vtaiwan" element={<Project name={"vtaiwan"}/>}></Route>
          <Route path="/projects/po-network" element={<Project name={"po-network"}/>}></Route>
      
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
