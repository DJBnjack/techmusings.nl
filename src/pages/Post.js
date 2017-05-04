import React from 'react';
import {NavLink} from 'react-router-dom';

const Post = (props) => (
    <article>
        <header>
            <span className="date">{props.post.date}</span>
            <h2><NavLink to={{pathname: props.post.link, hash: "#main"}} >{props.post.title}</NavLink></h2>
        </header>
        <a href="#" className="image fit"><img src={props.post.picture} alt="" /></a>
        <p>{props.post.abstract}</p>
        <ul className="actions">
            <li><NavLink to={props.post.link} className="button big">Full Story</NavLink></li>
        </ul>
    </article>
);

export default Post;
