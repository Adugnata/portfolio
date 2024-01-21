import React, { useEffect, useState } from 'react';
import '../css/About.css'; // Import the CSS file

const About = ({ data }) => {
    const [animatedText, setAnimatedText] = useState('');
    let intervalId;

    useEffect(() => {
        const text = `${data.title}\n\n${data.bio}\n\nLocation: ${data.location}\nPhone: ${data.phone}\nEmail: ${data.email}\nLinkedIn: ${data.linkedin}`;

        const writeText = () => {
            let index = 0;
            intervalId = setInterval(() => {
                setAnimatedText((prevText) => prevText + text[index]);
                index++;

                if (index === text.length) {
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
