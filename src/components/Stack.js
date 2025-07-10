import React from 'react';
import { useInView } from 'react-intersection-observer';
import git from './teck_stack/git.png';
import bash from './teck_stack/bash.png';
import ubuntu from './teck_stack/ubuntu.png';
import c from './teck_stack/c.png';
import css from './teck_stack/css.png';
import flask from './teck_stack/flask.png';
import github from './teck_stack/github.png';
import html from './teck_stack/html.png';
import linux from './teck_stack/icons8-linux-96.png';
import js from './teck_stack/js.png';
import mysql from './teck_stack/mysql.png';
import react from './teck_stack/react.png';
import solidity from './teck_stack/solidity.png';
import python from './teck_stack/python.png';

function Stack() {
    const { ref, inView } = useInView({
        triggerOnce: true, // Lance l'animation uniquement lors de la première vue
        threshold: 0.2, // L'animation démarre lorsque 10% de la section sont visibles
    });
    return (
        <section id="Stack" ref={ref} className={`fade-in ${inView ? 'appear' : ''}`}>
            <div id="logos_box">
            <img src={git} alt="git" className="stack" />
            <img src={github} alt="github" className="stack" />
            <img src={linux} alt="linux" className="stack" />
            <img src={ubuntu} alt="ubuntu" className="stack" />
            <img src={bash} alt="bash" className="stack" />
            <img src={c} alt="c" className="stack" />
            <img src={solidity} alt="solidity" className="stack" />
            <img src={python} alt="python" className="stack" />
            <img src={flask} alt="flask" className="stack" />
            <img src={mysql} alt="mysql" className="stack" />
            <img src={js} alt="js" className="stack" />
            <img src={react} alt="react" className="stack" />
            <img src={html} alt="html" className="stack" />
            <img src={css} alt="css" className="stack" />
           </div>
        </section>
    )
}

export default Stack;