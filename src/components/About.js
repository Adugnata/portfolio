import React, { useEffect, useState } from 'react';
import '../css/About.css'; // Import the CSS file

const About = ({ data }) => {
    const [animatedText, setAnimatedText] = useState('');
    let intervalId;

    useEffect(() => {
        const text = `${data.bio}\n\nEmail: ${data.email}\n\nLinkedIn: ${data.linkedin}\n\nGitHub: ${data.github}`;

        const writeText = () => {
            let index = 0;
            intervalId = setInterval(() => {
                if (index < text.length-1) {
                    setAnimatedText((prevText) => prevText + text[index]);
                    index++;
                } else {
                    clearInterval(intervalId);
                }
            }, 50); // Adjust the interval for the speed of animation
        };

        writeText();

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, [data]);

    return (
        <section id="about-section">
            <h2>About</h2>
            <p id="about-text">{animatedText}</p>
        </section>
    );
};

export default About;
