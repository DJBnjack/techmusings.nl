import React from 'react';
import {NavLink} from 'react-router-dom';

const Post = (props) => (
    <article>
        <header>
            <span className="date">{props.post.date}</span>
            <h2><NavLink to={props.post.link}>{props.post.title}</NavLink></h2>
        </header>
        <NavLink to={props.post.link} className="image fit"><img src={props.post.picture} alt="" /></NavLink>
        <p>{props.post.abstract}</p>
        <ul className="actions">
            <li><NavLink to={props.post.link} className="button big">Full Article</NavLink></li>
        </ul>
    </article>
);

export default Post;
