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
      <div className={styles.markdown}> 

      
      <div className={styles.breadcrumb}>
      <Link to="/">home</Link>
        /{' '}<Link to="/projects">projects</Link>{' '}
        /{' '}<Link className={styles.current} to=".">{slug}</Link>
      </div>

      <Markdown>
        {post}
      </Markdown>
      </div>
    </>
  );
}

export default Project;
