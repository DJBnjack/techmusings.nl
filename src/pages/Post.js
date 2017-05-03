import React from 'react';

const Post = (props) => (
    <article>
        <header>
            <span className="date">{props.post.date}</span>
            <h2><a href="#">{props.post.title}</a></h2>
        </header>
        <a href="#" className="image fit"><img src={props.post.picture} alt="" /></a>
        <p>{props.post.abstract}</p>
        <ul className="actions">
            <li><a href="#" className="button">Full Story</a></li>
        </ul>
    </article>
);

export default Post;
