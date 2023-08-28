import React from "react";
import {Link} from 'react-router-dom';

function Notes() {

  const allWeeksNotes = [{
    date: "2023-08-28",
    slug: "2023-08-28",    
    about: "Interface for care - positive rights and care ethics"
  },{
    date: "2023-08-21",
    slug: "2023-08-21",    
    about: "MODA deliverables divide and conquer"
  },{
    date: "2023-08-14",
    slug: "2023-08-14",    
    about: "Civictech portfolio in DML, in progress: vTaiwan x Chatham House - opinion collection"
  },{
    date: "2023-08-07",
    slug: "2023-08-07",    
    about: "In progress: vTaiwan"
  },{
    date: "2023-07-31",
    slug: "2023-07-31",    
    about: "Starting DML, and got the OpenAI grant!"
  },{
    date: "2023-06-19",
    slug: "2023-06-19",    
    about: "met with Audrey, Alex and Flynn"
  },{
    date: "2023-06-12",
    slug: "2023-06-12",    
    about: "reigniting vTaiwan"
  },{
    date: "2023-06-05",
    slug: "2023-06-05",    
    about: "Meeting with Hadjar of Polis"
  },{
    date: "2023-05-29",
    slug: "2023-05-29",    
    about: "Reading Hypercerts' white paper with Remarkable"
  },{
    date: "2023-05-22",
    slug: "2023-05-22",    
    about: "DML offsite at East Sussex/ camping at Kent"    
  },{
    date: "2023-05-15",
    slug: "2023-05-15",    
    about: "Polis workshop at Newcastle/ Online talk at Institute for Ethics in AI/ Festival of Debate at Sheffield"    
  },{
    date: "2023-05-08",
    slug: "2023-05-08",    
    about: "Conversational AI for Non-human Representation in Decision Making and working with RxC"    
  },{
    date: "2023-05-01",
    slug: "2023-05-01",    
    about: "tinkering a chatbot and catching up with Liz"    
  },{
    date: "2023-04-24",
    slug: "2023-04-24",    
    about: "first contact with da0 Taiwan, and meeting with Saffron, Teddy and Flynn"    
  },{
    date: "2023-04-17",
    slug: "2023-04-17",
    about: "AI for Institutions workshop at Wytham Abbey, Oxford"    
  },
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
      <p>{weeklyNote.date} 
      {' '}
      {weeklyNote.about && 
        `- ${weeklyNote.about}`
      }
      </p>
    </>
  )
}