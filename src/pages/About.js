import React from 'react';
import ScrollToTopOnMount from '../helper/ScrollToTopOnMount';

const About = () => (
    <div id="main">
        <ScrollToTopOnMount />
        <section className="post">
            <header className="major">
                <h1>About Techmusings</h1>
                <p>This is a meta-post about this site and the author: hi - this is me on the right!</p>
            </header>
            <div className="image main"><img src="/images/about.jpg" alt="image showing my loved one and myself" /></div>
            <p>This picture is taken in Greece, during a great sunny day when my better half and I where there on holliday. We live in Rotterdam, The Netherlands (which is in Europe, for those vising from far far away) - so any sunny day anywhere is something to enjoy, haha!</p>
            <p>I am working as a "Business and IT Architect" at Eneco, a large dutch Green Energy company. I also enjoy tinkering around with embedded systems, websites (like this one!), blockchain technology, home cinema and am a bit of a foodie.</p>
            <p>This site serves two main purposes: <ol><li>To document and share cool new technologies and possibilitied with these technologies, and,</li><li>To learn React and how to tie together a React front-end to a ASP.NET Core backend, using Docker.</li></ol> I am also creating a course on this which should be available soon soon soon!</p>
        </section>
    </div>
);

export default About;
