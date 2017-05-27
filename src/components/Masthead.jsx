import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers'; // eslint-disable-line
import { config } from 'config'; // eslint-disable-line

export default function Masthead() {
  return (
    <header className='masthead'>
      <nav>
        <ul>
          <li>
            <Link to={prefixLink('/')}>
              Home
            </Link>
          </li>
          &middot;
          <li>
            <Link to={prefixLink('/about/')}>
              About
            </Link>
          </li>
          &middot;
          <li>
            <Link to={prefixLink('/blog/')}>
              Blog
            </Link>
          </li>
          &middot;
          <li>
            <Link to={prefixLink('/Projects/')}>
              Projects
            </Link>
          </li>
          &middot;
          <li>
            <Link to={prefixLink('/hire/')}>
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

Masthead.propTypes = {
  className: PropTypes.string
};
