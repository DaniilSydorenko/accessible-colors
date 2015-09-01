import styles from './Footer.less';

import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.broughtToYouContainer}>
            <p className={styles.contentHeader}>
              Brought to you by:
            </p>
            <p className={styles.content}>
              <a className={styles.link} target="_blank"
                 href="https://twitter.com/moroshko">
                <img className={styles.image}
                     src="https://www.gravatar.com/avatar/7ee5d55919c272eddef98dbe16f5cb09?s=54" />
                <span className={styles.linkText}>Misha Moroshko</span>
              </a>
            </p>
            <p className={styles.content}>
              <a className={styles.link} target="_blank"
                 href="https://twitter.com/thatbalduxguy">
                <img className={styles.image}
                     src="https://www.gravatar.com/avatar/6fa8f8433861ca68ed44cc79001554d6?s=54" />
                <span className={styles.linkText}>Vedran Arnautović</span>
              </a>
            </p>
          </div>
          <div className={styles.haveFeatureIdeasContainer}>
            <p className={styles.contentHeader}>
              Have feature ideas?
            </p>
            <p className={styles.content}>
              <a className={styles.link} target="_blank"
                 href="https://accessible-colors.slack.com">
                <span className={styles.icon + ' icon-circle-slack'} />
                <span className={styles.linkText}>Chat to us on Slack</span>
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
