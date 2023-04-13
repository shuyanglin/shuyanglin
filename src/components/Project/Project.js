import React from "react";
import {Link} from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import styles from './Project.module.css'

function Project({slug}) {
  const [post, setPost] = React.useState('');

  React.useEffect( () => {
    import(`./Markdowns/${slug}.md`)
      .then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(res => setPost(res))
      })
      .catch(err => console.log(err));
  })

  return (
    <>
      {/* <h1 className={styles.mardown}> <Link to="/projects"> Projects </Link> / {slug}</h1> */}
      <Markdown >
        {post}
      </Markdown>
    </>
  );
}

export default Project;
