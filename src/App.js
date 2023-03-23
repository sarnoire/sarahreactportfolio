import React from 'react';
import { useState } from "react";
import './App.css';
import Header from './Components/Header'
import Main from './Components/Main'
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import Footer from './Components/Footer';

function App() {

  // const [pages, setPages] = useState([
  //   {
  //     name: "resume"
  //   },
  //   {
  //     name: "projects"
  //   },
  //   {
  //     name: "contact"
  //   },
  //   {
  //     name: "about me"
  //   },
  // ])

  const [activePage, setActivePage] = useState(" ")
  
  const displayPage = ()=> {
    switch(activePage){
      case "About Me":
        return <AboutMe />
      case "Projects":
        return <Projects />
      case "Contact":
        return <Contact />
      case "Resume":
          return <Resume />        
        default:
          return <Main />;
  
    }
  }

  return (
    <div className="App">
      <Header
        // pages={pages}
        activePage={activePage}
        setActivePage={setActivePage}
      />
    
      {displayPage()}
      
      <Footer /> {Footer}
    </div>
  );
}

export default App;
