import React from 'react';
import efamerch_edited from '../../assets/img/efamerch_edited.jpg';
import getstruments_edited from '../../assets/img/getstruments_edited.jpg';
import gardenapp_edited from '../../assets/img/gardenapp_edited.jpg';
import './projects.css';
import recipeapi_edited from '../../assets/img/recipeapi_edited.jpg';
import lotrstore_edited from '../../assets/img/lotrstore_edited.jpg';
import creature_edited from '../../assets/img/creature_edited.jpg';
import bsurentalz_edited from '../../assets/img/bsurentalz_edited.png';


class Projects extends React.Component{
    constructor(){
        super()
    }
    

    render(){
        return (
          <div className="parent" id="projects">
            <div className="grid-container">
            <div className="grid-item">
                  <h2><a href="https://bsurentalz-client.herokuapp.com/" target="_blank" className="project-title">BSU Rentalz</a></h2><br />
                  <a href="https://bsurentalz-client.herokuapp.com/" target="_blank">
                  <img src={bsurentalz_edited} alt="BSU Rentalz Website"/></a>
                  <h4 className="github"><a href="https://github.com/austinmscholl/FairRentalValuz-client" target="_blank">GitHub: Client</a></h4>
                  <div className="narrowParagraph">
                    <p>This professional project was developed for my client, Fair Rental Valuz. <a href="https://github.com/calebchristensen">Caleb Christensen</a> assisted in making this web application responsive on multiple devices. For development I used <b>A</b>ngular, <b>H</b>TML, <b>C</b>SS and <b>S</b>CSS. We used Heroku for deployment, Git for version control and Slack for communication.</p>
                  </div><br /><br />
                </div>
              <div className="grid-item">
                  <h2><a href="https://efamerch-client.herokuapp.com/" target="_blank" className="project-title">Eleven Fifty Academy Mock Merchandise Store</a></h2><br />
                  <a href="https://efamerch-client.herokuapp.com/" target="_blank">
                  <img src={efamerch_edited} alt="EFA Merch App"/></a>
                  <h4 className="github"><a href="https://github.com/austinmscholl/EFAMerchClient" target="_blank">GitHub: Client</a></h4>
                  <h4 className="github"><a href="https://github.com/austinmscholl/EFAMerchServer" target="_blank">GitHub: Server</a></h4>
                  <div className="narrowParagraph">
                    <p>This application was developed as part of our Red Badge Team Project. For development we used <b>P</b>ostgreSQL <b>E</b>xpress <b>A</b>ngular and <b>N</b>ode.js. We used Heroku for deployment, Git for version control, Slack for communication, and Trello for project management. Implements MVC pattern and full CRUD functionality.</p>
                  </div><br /><br />
                </div>
                <div className="grid-item">
                  <h2><a href="https://getstrumentsclient.herokuapp.com/" target="_blank" className="project-title">Getstruments - Music Equipment Rental</a></h2><br />
                  <a href="https://getstrumentsclient.herokuapp.com/" target="_blank">
                  <img src={getstruments_edited} alt="Getstruments Music Equipment Renting App" /></a>
                  <h4 className="github"><a href="https://github.com/austinmscholl/getstrumentsClient" target="_blank">GitHub: Client</a></h4>
                  <h4 className="github"><a href="https://github.com/austinmscholl/getstrumentsserver" target="_blank">GitHub: Server</a></h4>
                  <div className="narrowParagraph">
                    <p>"Getstruments", my first fullstack application, was developed during Eleven Fifty Academy's Blue Badge phase. For development I used <b>P</b>ostgreSQL <b>E</b>xpress <b>R</b>eact.js and <b>N</b>ode.js. I used Heroku for deployment and Git for version control. Implements MVC pattern and full CRUD functionality.</p>
                  </div><br /><br />
                </div>
                <div className="grid-item">
                  <h2><a href="https://gardenappclient.herokuapp.com/" target="_blank" className="project-title">Pots n' Plants Mock Garden Store</a></h2><br />
                  <a href="https://gardenappclient.herokuapp.com/" target="_blank">
                  <img src={gardenapp_edited} alt="Mock Garden Store"/></a>
                  <h4 className="github"><a href="https://github.com/austinmscholl/gardenClient" target="_blank">GitHub: Client</a></h4>
                <div className="narrowParagraph">
                  <p>This application was developed during a 24-hour sprint. For development we used <b>P</b>ostgreSQL <b>E</b>xpress <b>A</b>ngular and <b>N</b>ode.js. We used Heroku for deployment and Git for version control.</p>
                </div><br /><br />
                </div>
                <div className="grid-item">
                  <h2><a href="https://austinmscholl.github.io/recipeApi/" target="_blank" className="project-title">Edamam Recipe Search API</a></h2><br />
                  <a href="https://austinmscholl.github.io/recipeApi/" target="_blank">
                  <img src={recipeapi_edited} alt="Edamam Recipe API"/></a>
                  <h4 className="github"><a href="https://github.com/austinmscholl/recipeApi" target="_blank">GitHub: Client</a></h4>
                  <div className="narrowParagraph">
                    <p>This application was developed during Eleven Fifty's Gold Badge phase. Search recipes by entering an ingredient into the search box.</p>
                  </div><br /><br />
                </div>
                <div className="grid-item">
                  <h2><a href="https://austinmscholl.github.io/storeApp/" target="_blank" className="project-title">Mock Store: Lord of the Rings</a></h2><br />
                  <a href="https://austinmscholl.github.io/storeApp/" target="_blank">
                  <img src={lotrstore_edited} alt="Mock Store: Lord of the Rings"/></a>
                  <h4 className="github"><a href="https://github.com/austinmscholl/storeApp" target="_blank">GitHub: Client</a></h4>
                  <div className="narrowParagraph">
                    <p>This static store-front page was developed using HTML and CSS during Eleven Fifty's Gold Badge phase.</p>
                  </div><br /><br />
                </div>
                <div className="grid-item">
                  <h2><a href="https://codepen.io/austinmscholl/pen/vzGPRQ" target="_blank" className="project-title">'Ugly' CSS Creature</a></h2><br />
                  <a href="https://codepen.io/austinmscholl/pen/vzGPRQ" target="_blank">
                  <img src={creature_edited} alt="'Ugly' CSS Creature"/></a>
                  <h4 className="github"><a href="https://codepen.io/austinmscholl/pen/vzGPRQ" target="_blank">Codepen</a></h4>
                  <div className="narrowParagraph">
                    <p>An 'Ugly' CSS Creature; created during my first week at Eleven Fifty.</p>
                </div>
              </div><br /><br />
          </div>
        </div>
        )
    }
}

export default Projects;