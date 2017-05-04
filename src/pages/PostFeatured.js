import React from 'react';
import {NavLink} from 'react-router-dom';

const PostFeatured = (props) => (
    <article className="post featured">
        <header className="major">
            <span className="date">{props.post.date}</span>
            <h2><NavLink exact to={props.post.link}>{props.post.title}</NavLink></h2>
            <p>{props.post.abstract}</p>
        </header>
        <NavLink exact to={props.post.link} className="image main"><img src={props.post.picture} alt="" /></NavLink>
        <ul className="actions">
            <li><NavLink exact to={props.post.link} className="button big">Full Article</NavLink></li>
        </ul>
    </article>
);

export default PostFeatured;
