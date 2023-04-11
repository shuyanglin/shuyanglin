import React from 'react';
import { Route, Routes } from 'react-router-dom';

import NavigationBar from '../NavigationBar';
import About from '../About/About'
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import Footer from '../Footer';
import Notes from '../Notes/Notes';
import Calendar from '../Calendar/Calendar';

function App() {

  return (
    <>
      <NavigationBar/>
      <div className='container'> 
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/notes" element={<Notes/>}></Route>
          <Route path="/calendar" element={<Calendar/>}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
