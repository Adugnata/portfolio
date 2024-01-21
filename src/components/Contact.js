import React from 'react';

const Contact = ({ data }) => (
    <section>
        <h2>Contact</h2>
        <p>
            Location: {data.location} <br />
            Phone: {data.phone} <br />
            Email: {data.email}
        </p>
        <p>LinkedIn: {data.linkedin}</p>
    </section>
);

export default Contact;
