import React from 'react';

const Experience = ({ experience }) => (
    <section>
        <h2>Experience</h2>
        {experience.map((job, index) => (
            <div key={index}>
                <h3>{job.position}</h3>
                <p>
                    {job.company}, {job.location} ({job.date})
                </p>
                <ul>
                    {job.responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                    ))}
                </ul>
                <p>Technologies: {job.technologies.join(', ')}</p>
            </div>
        ))}
    </section>
);

export default Experience;
