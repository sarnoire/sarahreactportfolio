import React from 'react';
import { useState } from "react";
import './App.css';
import Header from './Components/Header'
import Main from './Components/Main'
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';


function App() {

  // const [pages, setPages] = useState([
  //   {
  //     name: "home"
  //   },
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
  //   {
  //     name: "resume"
  //   },
  // ])

  const [activePage, setActivePage] = useState("")
  const displayPage = ()=> {
    switch(setActivePage){
      case "About Me":
        return <AboutMe />
      case "Projects":
        return <Projects />
      //TODO: Add case return for the rest of the classes
        default:
          return <Home />;
  
    }
  }

  return (
    <div className="App">
      <Header
        pages={pages}
        activePage={activePage}
        setActivePage={setActivePage}
      />
    
      <footer />
    </div>
  );
}

export default App;
