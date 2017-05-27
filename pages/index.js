import { config } from 'config'; // eslint-disable-line
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import Helmet from 'react-helmet';
// import QuantfiedSelf from '../src/components/QuantifiedSelf';
import { getBlogPosts } from '../src/utils/blog-helpers';
import '../src/css/lists.css';

const Anchor = props =>
  <a target='_blank' rel='noopener noreferrer' href={props.href}>
    {props.title}
  </a>;

Anchor.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string
};

export default function BlogIndex(props) {
  const latestBlogPost = getBlogPosts(props.route).shift();
  const { data: { title, date }, path } = latestBlogPost;
  const fromNow = moment(date, 'MM/DD/YYYY').fromNow();
  const docTitle = `${config.userName}`;
 console.log(latestBlogPost);
  return (
    <section className='content'>
      <Helmet
        title={docTitle}/>
      <p>Hello, my name is <Link to='/about/'>Saikumar Chintada</Link>.</p>
      <p>
        I am a Web/Software Developer at <Anchor href='//coupondunia.in' title='coupondunia.in' />, Mumbai.
      </p>
      <p></p>
      <p></p>
      <p></p>
      <h2> <Anchor href='http://www.github.com/SaikumarChintada' title='github' /></h2>
    </section>
  );
}

BlogIndex.propTypes = {
  route: PropTypes.object
};
