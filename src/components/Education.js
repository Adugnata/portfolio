import React from 'react';

const Education = ({ education }) => (
    <section>
        <h2>Education</h2>
        {education.map((edu, index) => (
            <div key={index}>
                <h3>{edu.degree}</h3>
                <p>
                    {edu.school}, {edu.location}
                </p>
            </div>
        ))}
    </section>
);

export default Education;
