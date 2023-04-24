import React from "react";
import Markdown from 'markdown-to-jsx';
import { Link } from "react-router-dom";
import styles from './Note.module.css'

function Note({slug}) {
  const [note, setNote] = React.useState('');

  React.useEffect( () => {
    import(`./Markdowns/note-${slug}.md`)
      .then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(res => setNote(res))
      })
      .catch(err => console.log(err));
  })

  return (
  <div className={styles.markdown}>
    <div className={styles.breadcrumb}>
      <Link to="/">home</Link>
        /{' '}<Link to="/notes">notes</Link>{' '}
        /{' '}<Link className={styles.current} to=".">{slug}</Link>
      </div>
    <h2>{slug}</h2>

    <Markdown className="mardown">
      {note}
    </Markdown>

  </div>);
}

export default Note;
