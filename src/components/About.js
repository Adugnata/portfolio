import React, { useEffect, useRef, useState } from 'react';
import '../css/About.css';

const About = ({ data }) => {
    const [animatedText, setAnimatedText] = useState('');
    const intervalRef = useRef(null);

    useEffect(() => {
        if (!data) return;

        // Remove the LinkedIn URL from the animated text
        const fullText = `${data.bio}\n\nLinkedIn: `;
        let index = 0;

        const animate = () => {
            intervalRef.current = setInterval(() => {
                index++;
                setAnimatedText(fullText.slice(0, index));
                if (index >= fullText.length) {
                    clearInterval(intervalRef.current);
                }
            }, 50);
        };

        animate();

        return () => {
            clearInterval(intervalRef.current);
        };
    }, [data]);

    return (
        <section id="about-section">
            <h2>About</h2>
            <p id="about-text">
                {animatedText}
                {/* Show LinkedIn link after animation is complete */}
                {animatedText.endsWith('LinkedIn: ') && (
                    <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
                        {data.linkedin}
                    </a>
                )}
            </p>
        </section>
    );
};

export default About;
