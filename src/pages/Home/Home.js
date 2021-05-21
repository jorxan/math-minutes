import React from 'react';
import Nav from '../../components/Navbar/Nav';
import SubjectBox from '../../components/subjectBox/SubjectBox';
import './Home.css';

function Home() {
    return (
        <div className="home" id="home">
            <Nav/>
    <div className="subjects">
        <div className="subject__container">
            <SubjectBox subject="+"/>
            <SubjectBox subject="-"/>
        </div>
        <div className="subject__container">
            <SubjectBox subject="x"/>
            <SubjectBox subject="÷"/>
        </div>
    </div>
        </div>
    )
}

export default Home
