import React from "react";
import {Link} from 'react-router-dom';

function Notes() {

  const allWeeksNotes = [{
    date: "2023-04-17",
    slug: "2023-04-17",
    about: "the AI for Institutions workshop at Oxford"    
  },{
    date: "2023-04-24",
    slug: "2023-04-24",    
    about: "a meeting with DA0, discussing attending Ars Electronica, and meeting with Saffron"    
  },{
    date: "2023-05-01",
    slug: "2023-05-01",    
    about: "tinkering a chatbot and catching up with Liz"    
  },{
    date: "2023-05-08",
    slug: "2023-05-08",    
    about: "finalising documentation for Conversational AI for Non-human Representation in Decision Making and working with RxC"    
  },{
    date: "2023-05-15",
    slug: "2023-05-15",    
    about: "teaching at Newcastle and attending river Don workshop at Sheffield."    
  },{
    date: "2023-05-22",
    slug: "2023-05-22",    
    about: "joining the offsite gathering of DML and having a camping trip at Kent."    
  }
]

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
      <p>Weekly note of {weeklyNote.date} 
      {' '}
      {weeklyNote.about && 
        `, about ${weeklyNote.about}.`
      }
      </p>
    </>
  )
}