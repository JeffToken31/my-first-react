import React from 'react';
import { useInView } from 'react-intersection-observer';

function Stack() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    return (
        <section id="Stack" ref={ref} className={`fade-in ${inView ? 'appear' : ''}`}>
            <div id="logos_box">
                <img src="/teck_stack/git.png" alt="git" className="stack" />
                <img src="/teck_stack/github.png" alt="github" className="stack" />
                <img src="/teck_stack/icons8-linux-96.png" alt="linux" className="stack" />
                <img src="/teck_stack/ubuntu.png" alt="ubuntu" className="stack" />
                <img src="/teck_stack/bash.png" alt="bash" className="stack" />
                <img src="/teck_stack/c.png" alt="c" className="stack" />
                <img src="/teck_stack/solidity.png" alt="solidity" className="stack" />
                <img src="/teck_stack/python.png" alt="python" className="stack" />
                <img src="/teck_stack/flask.png" alt="flask" className="stack" />
                <img src="/teck_stack/mysql.png" alt="mysql" className="stack" />
                <img src="/teck_stack/js.png" alt="js" className="stack" />
                <img src="/teck_stack/react.png" alt="react" className="stack" />
                <img src="/teck_stack/html.png" alt="html" className="stack" />
                <img src="/teck_stack/css.png" alt="css" className="stack" />
            </div>
        </section>
    )
}

export default Stack;