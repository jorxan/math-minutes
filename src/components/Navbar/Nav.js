import React from 'react';
import './Nav.css';

function Nav() {

    const DarkLight = () => {
        let x = document.getElementById("switch");
        let y = document.getElementById("switch__logo");
        let a = document.getElementById("home");
        let textColor = document.querySelectorAll("h1.subject__text");
        console.log(x.classList[2])

        if(x.classList[2] === "shadow-dark")  {   
        x.classList.remove("shadow-dark");
        x.classList.add("shadow-light");
        y.classList.remove("fa-moon");
        y.classList.remove("fas");
        y.classList.add("far");
        y.classList.add("fa-sun");
        a.classList.remove("App");
        a.classList.add("App-light");
        textColor.style.color = "#111111"
        } else {
            x.classList.add("shadow-dark");
        x.classList.remove("shadow-light");
        y.classList.add("fa-moon");
        y.classList.add("fas");
        y.classList.remove("far");
        y.classList.remove("fa-sun");
        a.classList.add("App");
        a.classList.remove("App-light");
        }
    }
{/* <i class="far fa-sun"></i> */}
    return (
        <div className="navbar">
                <div className="nav__element theme-container shadow-dark" onClick={DarkLight} id="switch">
                <i class="fas fa-moon fa-lg" id="switch__logo"></i>
                </div>
                <ul className="home__profileContainer">
                <li className="nav__element nav__elementMid">
                    <i class="fas fa-home fa-lg"></i>
                </li>
                <li className="nav__element nav__elementMid">
                    <i class="fas fa-user fa-lg"></i>
                </li>
                </ul>
        </div>
    )
}

export default Nav
