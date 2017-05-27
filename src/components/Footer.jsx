import React, { PropTypes } from 'react';
import { prefixLink } from 'gatsby-helpers'; // eslint-disable-line

const Icon = ({ icon }) =>
  <span className='footer-icon' style={{ backgroundImage: `url(${prefixLink(`/icons/${icon}.svg`)})` }} />;

Icon.propTypes = {
  icon: PropTypes.string
};

export default function Footer() {
  return (
    <footer>
      <section>
        <ul>
          <li>
            <a rel='noopener noreferrer' target='__blank' href='https://www.facebook.com/saikumar.chintada.3'>
              <Icon icon='facebook' />
            </a>
          </li>
          <li>
            <a rel='noopener noreferrer' target='__blank' href='http://www.github.com/SaikumarChintada'>
              <Icon icon='github' />
            </a>
          </li>
          <li>
            <a rel='noopener noreferrer' target='__blank' href='http://www.linkedin.com/in/saikumar-chintada-a72671b1/'>
              <Icon icon='linkedin' />
            </a>
          </li>
        </ul>
        <p>
        {/* acknowledgement */}
            Gatsby-Starter credits :
            <a rel='noopener noreferrer' target='__blank' href='//github.com/f0rr0/'>
              @Siddharth Jain
            </a>
            .
        </p>
      </section>
    </footer>
  );
}
