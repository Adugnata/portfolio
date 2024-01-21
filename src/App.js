import './css/App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import ContactForm from './components/ContactForm';

import data from './data/data.json';
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function ContactMe() {
    return (
        <div>
            <ContactForm />
        </div>
    );
}


function App() {

    return (
        <Router>
            <div>
                <Header name={data.name} />
                <Routes>
                    <Route path="/about" element={<About data={data} />} />
                    <Route path="/skills" element={<Skills skills={data.skills} />} />
                    <Route path="/experience" element={<Experience experience={data.experience} />} />
                    <Route path="/education" element={<Education education={data.education}/>} />
                    <Route path="/contactMe" element={<ContactMe />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;