import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import Helmet from 'react-helmet';
import { config } from 'config'; // eslint-disable-line
// import { TweetThis, FacebookShare } from '../components/Social';
import ReadNext from '../components/ReadNext';
// import Bio from '../components/Bio';
import { isBlogPost, getBlogPosts, getNextPosts, getPostsFromPaths } from '../utils/blog-helpers';
// import avatar from '../../images/avatar.jpg';

import '../css/tomorrow-night.css';

export default class MarkdownWrapper extends Component {
  render() {
    const { route } = this.props;
    const { page: { data: post } } = route;
    const path = post.path = route.path;
    const thumbnail = post.thumbnail ? `https://google.com` : `https://google.com`;
    const posts = getBlogPosts(route);

    if (isBlogPost(post)) {
      const docTitle = `${post.title} - ${config.blogTitle}`;
      const nextPosts = post.readNext ? getPostsFromPaths(post.readNext, posts)
       : getNextPosts(path, posts);
      return (
        <section className='content'>
          <Helmet title={docTitle} />
          <article className='blog-body'>
            <header className='blog-header'>
              <h2>{post.title}</h2>
              <div>
                <time>{moment(post.date, 'MM/DD/YYYY').format('MMMM D, YYYY')}</time> &middot; {post.words} words &middot; {post.readTime}
              </div>
            </header>
            <div className='post-content' dangerouslySetInnerHTML={{ __html: post.body }} />
          </article>
          <aside className='post-footer'>
            <ReadNext posts={nextPosts} />
          </aside>
        </section>
      );
    }

    return (
      <section className='content'>
        <Helmet title={post.title} />
        {
          post.title ?
            <header>
              <h2>{post.title}</h2>
            </header>
          : null
        }
        <div className='post-content' dangerouslySetInnerHTML={{ __html: post.body }} />
      </section>
    );
  }
}

MarkdownWrapper.propTypes = {
  route: PropTypes.object
};
