import React, { Component } from 'react';

import Footer from './Footer';
import PostFeatured from './PostFeatured';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          date: "April 24, 2017",
          title: "CI/CD inside Docker 2",
          abstract: "Aenean ornare velit lacus varius enim ullamcorper proin aliquam facilisis ante sed etiam magna interdum congue. Lorem ipsum dolor amet nullam sed etiam veroeros.",
          picture: "images/pic01.jpg",
          link: "/article/docker-2"
        },
        {
          date: "April 22, 2017",
          title: "CI/CD inside Docker 1",
          abstract: "Aenean ornare velit lacus varius enim ullamcorper proin aliquam facilisis ante sed etiam magna interdum congue. Lorem ipsum dolor amet nullam sed etiam veroeros.",
          picture: "images/pic02.jpg",
          link: "/article/docker-1"
        }
      ]
    };
  }

  render() {
    return (
        <div id="main">
          <PostFeatured post={this.state.posts[0]} />
          <section className="posts">
            <Post post={this.state.posts[1]} />
            <Post post={this.state.posts[1]} />
            <Post post={this.state.posts[1]} />
            <Post post={this.state.posts[1]} />
            <Post post={this.state.posts[1]} />
            <Post post={this.state.posts[1]} />
          </section>
          <Footer />
        </div>
    );
  }
}

export default Posts;
