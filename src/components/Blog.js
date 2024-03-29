import React from 'react';
import '../css/Blog.css';
import architectureImage from '../image/architecture.png';
function Blog({ blogData: blog }) {
    return (
        <div className="blog-container">
            <h2 className="blog-title">{blog.title}</h2>
            {/* Add the architecture image here */}
            <img src={architectureImage} alt="Architecture Diagram" className="blog-architecture-image"/>
            {blog.sections.map((section, index) => (
                <div className="blog-section" key={index}>
                    {section.subtitle && <h3 className="blog-subtitle">{section.subtitle}</h3>}
                    <p className="blog-content">{section.content}</p>
                </div>
            ))}
        </div>
    );
}

export default Blog;

