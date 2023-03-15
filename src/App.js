import React from 'react';
import { useState } from "react";
import './App.css';
import Header from './Components/Header'
import Main from './Components/Main'

function App() {

  const [pages, setPages] = useState([
    {
      name: "home"
    },
    {
      name: "resume"
    },
    {
      name: "projects"
    },
    {
      name: "contact"
    },
    {
      name: "about me"
    },
    {
      name: "resume"
    },
  ])

  const [activePage, setActivePage] = useState(pages[0])

  return (
    <div className="App">
      <Header
        pages={pages}
        activePage={activePage}
        setActivePage={setActivePage}
      />
      <Main activePage={activePage} />
      <footer />
    </div>
  );
}

export default App;
