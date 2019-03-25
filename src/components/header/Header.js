import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import './header.css';

class Header extends React.Component {
    constructor() {
        super()
    }

    render(){
        return (
        
        <div className="nav">
            <a href="#" className="logo">Austin Scholl</a>
            <div className="nav-left">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
            <div className="nav-right">
                <a href="https://github.com/austinmscholl" target="_blank">GitHub</a>
                <a href="https://www.linkedin.com/in/austin-scholl" target="_blank">LinkedIn</a>
                <a href="https://happierunfound.home.blog" target="_blank">Blog</a>
                <a href="https://docs.google.com/document/d/1pd6pVw31MgSUaOGcCc1cTDVu03Vdi3vuUY52wlZ-bDM/edit?usp=sharing" target="_blank">Resume</a>
            </div>
        </div>
        )
    }
}


export default Header;
