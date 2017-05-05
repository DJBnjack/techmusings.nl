import React, { Component } from 'react';
import axios from 'axios';

import Footer from './Footer';
import PostFeatured from './PostFeatured';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get(`/api/posts`)
      .then(res => {
        const posts = res.data.map(obj => obj);
        this.setState({ posts });
      });
  }

  render() {
    var featuredPost = null;
    if (this.state.posts.length > 0) {
      featuredPost = <PostFeatured post={this.state.posts[0]} />;
    } else {
      featuredPost = <h1>Loading...</h1>;
    }

    var posts = [];
    if (this.state.posts.length > 1) {
      this.state.posts.slice(1).forEach(post => {
        posts.push(<Post key={post.link} post={post} />);
      });
    }

    var footer = [];
    if (this.state.posts.length > 10) {
      footer.push(<Footer />);
    }

    return (
      <div id="main">
        {featuredPost}
        <section className="posts">
          {posts}
        </section>
        {footer}
      </div>
    );
  }
}

export default Posts;
