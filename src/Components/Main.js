import React from 'react';
// import Home from "./Home";
import AboutMe from "./AboutMe"
import Projects from "./Projects"
import Resume from "./Resume"
import Contact from "./Contact"

function Main(props) {
    if (props.page === null) {
        return null;
    } 
    // else if (props === "home") {
    //     return <Home />;
    // } 
    else if (props === "aboutme") {
        return <AboutMe />;
    } else if (props === "projects") {
        return <Projects />;
    } else if (props === "resume") {
        return <Resume />;
    } else if (props === "contact") {
        return <Contact />
    } else {
        return null;
    }
}




export default Main