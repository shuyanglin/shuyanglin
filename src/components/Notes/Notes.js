import React from "react";
import {Link} from 'react-router-dom';

function Notes() {

  const allWeeksNotes = [{
    date: "2023-04-17",
    slug: "2023-04-17",
    about: "AI for Institutions"    
  },{
    date: "2023-04-24",
    slug: "2023-04-24",    
    about: "ArtsElectronic"    
  }]

  return (
    <>
      <h1>Notes</h1>
      <p>Weekly recaps of my experience, thoughts and learnings.</p>

      {allWeeksNotes.map(weeklyNote => (
        <Link to={`/notes/${weeklyNote.slug}`}>
          <NoteCard weeklyNote={weeklyNote}></NoteCard>
        </Link>
      ))}
      
    </>
  );
}



export default Notes;


function NoteCard({weeklyNote}){
  return(
    <>
      <p>Weekly note of {weeklyNote.date} about {weeklyNote.about}</p>
    </>
  )
}