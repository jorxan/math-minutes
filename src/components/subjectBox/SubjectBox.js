import React from 'react';
import './SubjectBox.css';

function SubjectBox({subject}) {
    return (
        <div className="subjectBox">
            <h1 className="subject__text" id="subject__text">{subject}</h1>
        </div>
    )
}

export default SubjectBox
