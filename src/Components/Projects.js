import React from 'react';

const portfolioProjects = [
    {
        name: 'Algorhythyms: Lyric Finder Site',
        gitHub: "https://github.com/teamirteklu/Algorhythyms-Project",
        deployed: "https://teamirteklu.github.io/Algorhythyms-Project/",
        image: "./images/algorythym.png",
        description: "Project 1."
    },
    {
        name: 'The Suite Life: Travel App',
        gitHub: "https://github.com/helenhosse/Travel-Passport",
        deployed: "https://helenhosse.github.io/Travel-Passport/",
        image: "./images/thesuitelife.png",
        description: "Project 2."
    },
    {
        name: 'Coming Soon',
        gitHub: "",
        deployed: "",
        image: "./images/coming-soon.png",
        description: "Future Project 3."
    },

]


function Projects () {
    return (
        <div style={{ backgroundImage: './images/dark-black-stripes-black-and-white-590013114', color: 'white' }}>
            {
                portfolioProjects.map((project, i) => (
                    <div key={`${project}_${i}`} style={{backgroundImage: project.image}}>
                        <h2>{project.name}</h2>
                        <img src={project.image} alt="" />
                        <p>{project.description}</p>
                        <p>Visit the project here: <a href={project.deployed}>{project.name}</a></p>
                        <p>Check out my code here: <a href={project.gitHub}>Github</a></p>
                    </div>
                ))
            }
        </div>
    )
}

export default Projects