import React from 'react';
import {NavLink} from 'react-router-dom';

const PostFeatured = (props) => (
    <article className="post featured">
        <header className="major">
            <span className="date">{props.post.date}</span>
            <h2><NavLink exact to={props.post.link}>{props.post.title}</NavLink></h2>
            <p>{props.post.abstract}</p>
        </header>
        <a href="#" className="image main"><img src={props.post.picture} alt="" /></a>
        <ul className="actions">
            <li><NavLink exact to={props.post.link} className="button big">Full Story</NavLink></li>
        </ul>
    </article>
);

export default PostFeatured;
