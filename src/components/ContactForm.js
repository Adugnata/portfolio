import React, { useState } from 'react';
import '../css/ContactForm.css'; // Import your CSS file for ContactForm styling

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        const newErrors = {};

        // Simple validation example (add more as needed)
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const response = await fetch('arn:aws:lambda:us-east-1:730335284440:function:sendEmail', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    // Handle successful response
                    console.log('Email sent successfully');
                } else {
                    // Handle error response
                    console.error('Error sending email');
                }
            } catch (error) {
                console.error('Error sending email:', error);
            }

            setFormData({
                name: '',
                email: '',
                message: ''
            });
        }
    };

    return (
        <form className="contact-form" onSubmit={handleFormSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
            {errors.name && <p className="error">{errors.name}</p>}

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
            {errors.email && <p className="error">{errors.email}</p>}

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleInputChange} required></textarea>
            {errors.message && <p className="error">{errors.message}</p>}

            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;
