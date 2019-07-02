import React from 'react';
import './about.css';

class About extends React.Component{
    constructor() {
        super()
    }

    render() {
      return (
        <div className="parent" id="about">
            <div className="header"><h1>Austin Scholl | Developer | Indianapolis</h1></div><br />
            <div className="about-body">
                <h4 className="ah">About Me</h4>
                <p className="ap">Certified Salesforce Developer</p>
                <p className="ap">Graduate of <a className="nodecoration" href="https://elevenfifty.org" target="_blank">Eleven Fifty's</a> JavaScript bootcamp and the <a className="nodecoration" href="https://pathfinder.salesforce.com/s/" target="_blank">Salesforce Pathfinder</a> program.</p>
                {/* <p>Founder/Lead Developer at <a className="nodecoration" href="https://www.unfoldingsoftware.com" target="_blank">Unfolding Software LLC</a></p> */}
                <p className="ap">Passionate about coding and learning new technology</p>
                <p className="ap">Interested in working on meaningful projects and making the world a better place</p><br />
                <h4 className="ah">Development and Technologies</h4>
                <div className="icons">
                <p className="ap iconEffect">Salesforce Development & Administration - JavaScript - React.js - Node.js - Angular - HTML & CSS</p>
                <p className="ap iconEffect">SQL - TypeScript - Bootstrap - Git - Heroku - MaterialUI - React-Native - Python </p><br /></div>
                <h4 className="ah">Hobbies and Interests</h4>
                <p className="ap"><a className="nodecoration" href="https://happierunfound.home.blog" target="_blank">Writing - </a>Meditation - Music - Yoga - Krav Maga - Podcasts - Economics - Philosophy - Psychology</p>
                <p className="ap">Meaningful Relationships - Meaningful Experiences</p>
            </div>
            <br /><br />
            <div className="projects-title">
                <h1>
                    Projects
                </h1><br /><br />
            </div>
        </div>
      )
    }
}

export default About;
