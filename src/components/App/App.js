import React from 'react';
import { Route, Routes } from 'react-router-dom';

import NavigationBar from '../NavigationBar';
import About from '../About/About'
import Projects from '../Projects/Projects';
import Project from "../Project/Project";
import Footer from '../Footer';
import Notes from '../Notes/Notes';
import Note from '../Note/Note'
import Readings from '../Readings/Readings'
import Calendar from '../Calendar/Calendar';
import NotFound from '../NotFound/NotFound';


function App() {

  return (
    <>
      <div className='container'>
        <NavigationBar />
        <Routes>
          {/* navigation */}
          <Route path="/" element={<About />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects page={"list"} />}></Route>
          <Route path="/notes" element={<Notes />}></Route>
          <Route path="/calendar" element={<Calendar />}></Route>
          <Route path="/readings" element={<Readings />}></Route>
          <Route path="*" element={<NotFound />}></Route>

          {/* projects */}
          <Route path="/projects/griphint" element={<Project slug={"griphint"} />}></Route>
          <Route path="/projects/vtaiwan" element={<Project slug={"vtaiwan"} />}></Route>
          <Route path="/projects/po-network" element={<Project slug={"po-network"} />}></Route>
          <Route path="/projects/river-chatbot" element={<Project slug={"river-chatbot"} />}></Route>

          {/* notes */}
          <Route path="/notes/2023-04-17" element={<Note slug={"2023-04-17"} />}></Route>
          <Route path="/notes/2023-04-24" element={<Note slug={"2023-04-24"} />}></Route>
          <Route path="/notes/2023-05-01" element={<Note slug={"2023-05-01"} />}></Route>
          <Route path="/notes/2023-05-08" element={<Note slug={"2023-05-08"} />}></Route>
          <Route path="/notes/2023-05-15" element={<Note slug={"2023-05-15"} />}></Route>
          <Route path="/notes/2023-05-22" element={<Note slug={"2023-05-22"} />}></Route>
          <Route path="/notes/2023-05-29" element={<Note slug={"2023-05-29"} />}></Route>
          <Route path="/notes/2023-06-05" element={<Note slug={"2023-06-05"} />}></Route>
          <Route path="/notes/2023-06-12" element={<Note slug={"2023-06-12"} />}></Route>
          <Route path="/notes/2023-06-19" element={<Note slug={"2023-06-19"} />}></Route>
          <Route path="/notes/2023-07-31" element={<Note slug={"2023-07-31"} />}></Route>
          <Route path="/notes/2023-08-07" element={<Note slug={"2023-08-07"} />}></Route>
          <Route path="/notes/2023-08-14" element={<Note slug={"2023-08-14"} />}></Route>
          <Route path="/notes/2023-08-28" element={<Note slug={"2023-08-28"} />}></Route>
          <Route path="/notes/2023-09-04" element={<Note slug={"2023-09-04"} />}></Route>
          <Route path="/notes/2023-09-11" element={<Note slug={"2023-09-11"} />}></Route>
          <Route path="/notes/2023-09-25" element={<Note slug={"2023-09-25"} />}></Route>
          <Route path="/notes/2023-11-06" element={<Note slug={"2023-11-06"} />}></Route>
          <Route path="/notes/2023-11-21" element={<Note slug={"2023-11-21"} />}></Route>
          <Route path="/notes/2023-11-21" element={<Note slug={"2023-11-21"} />}></Route>
          <Route path="/notes/2023-12-01" element={<Note slug={"2023-12-01"} />}></Route>
          <Route path="/notes/2023-12-28" element={<Note slug={"2023-12-28"} />}></Route>

        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
