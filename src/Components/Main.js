import React from 'react';
import Home from "./Home";
import AboutMe from "./AboutMe"
import Projects from "./Projects"
import Resume from "./Resume"
import Contact from "./Contact"

function Main(props) {
    if (props.page == null) {
        return null;
    } else if (props.page.name == "home") {
        return <Home />;
    } else if (props.page.name == "aboutme") {
        return <AboutMe />;
    } else if (props.page.name == "projects") {
        return <Projects />;
    } else if (props.page.name == "resume") {
        return <Resume />;
    } else if (props.page?.name == "contact") {
        return <Contact />
    } else {
        return null;
    }
}




export default Main