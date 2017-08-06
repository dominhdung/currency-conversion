import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router';
import styles from './About.css'

const style = {
  height: 400,
  width:600,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class About extends Component {
  render() {
    return (
      <Paper style={style} zDepth={3}>
        <strong className={styles.myName}>Dung Do Minh </strong>
        <div className={styles.title}>Senior JavaScript developer</div>
        <Link to={`/`}>Go back converter</Link>
      </Paper>
    );
  }
}

export default About;