import React from 'react';

const PostFeatured = (props) => (
    <article className="post featured">
        <header className="major">
            <span className="date">{props.post.date}</span>
            <h2><a href="#">{props.post.title}</a></h2>
            <p>{props.post.abstract}</p>
        </header>
        <a href="#" className="image main"><img src={props.post.picture} alt="" /></a>
        <ul className="actions">
            <li><a href="#" className="button big">Full Story</a></li>
        </ul>
    </article>
);

export default PostFeatured;
