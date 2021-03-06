/**
*
* Navigation
*
*/

import React from 'react';
import AppBar from '../AppBar';
import styles from './styles.css';

function Navigation({topics, selectTopic}) {
const topicNodes = topics.map(t=>(
  <div key={t.name} onClick={() => selectTopic(t)}>
    {t.name }
  </div>
));

  return (
    <div className={styles.navigation}>
      <AppBar/>
      {topicNodes}
    </div>
  );
}

Navigation.prototype = {
  topics: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      description: React.PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navigation;
