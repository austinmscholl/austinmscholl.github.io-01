import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <About />
          <Projects />
          <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
