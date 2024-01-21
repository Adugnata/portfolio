import React, { useEffect, useState } from 'react';
import '../css/Skills.css';

const Skills = ({ skills }) => {
    const [takenPositions, setTakenPositions] = useState([]);

    useEffect(() => {
        // Sort skills in ascending order
        const sortedSkills = [...skills].sort();

        // Initial positioning of skills
        positionSkills(sortedSkills);

        // Set a timer to reposition skills every 10 seconds
        const timerId = setInterval(() => {
            moveSkills();
        }, 10000); // Change the interval as needed

        // Cleanup the timer on component unmount
        return () => clearInterval(timerId);
    }, [skills]);

    const positionSkills = (sortedSkills) => {
        takenPositions.length = 0; // Clear the existing positions

        // Set a margin between items
        const itemMargin = 20;

        // Set the initial positions for the first column
        let currentX = 20; // Adjust the starting position as needed
        let currentY = itemMargin;

        // Iterate over each skill
        sortedSkills.forEach((skill, index) => {
            const skillElement = document.getElementById(`skill-${index}`);
            if (skillElement) {
                // Set the position for the skill in the current column
                skillElement.style.position = 'absolute';
                skillElement.style.left = `${currentX}px`;
                skillElement.style.top = `${currentY}px`;

                // Update the current position for the next skill in the same column
                currentY += skillElement.clientHeight + itemMargin;

                // Move to the next column after 10 skills
                if ((index + 1) % 10 === 0) {
                    currentX += 200; // Adjust the column spacing as needed
                    currentY = itemMargin; // Reset the Y position for the new column
                }

                takenPositions.push({ x: currentX, y: currentY });
            }
        });
    };

    const moveSkills = () => {
        // Move skills to the initial positions (reset)
        skills.forEach((skill, index) => {
            const skillElement = document.getElementById(`skill-${index}`);
            if (skillElement) {
                skillElement.style.left = `${takenPositions[index].x}px`;
                skillElement.style.top = `${takenPositions[index].y}px`;
            }
        });
    };

    return (
        <section>
            <h2>Skills</h2>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div key={index} id={`skill-${index}`} className="skill-item">
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
