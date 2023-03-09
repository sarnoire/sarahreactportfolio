const portfolioProjects = [
    {
        name: 'Weather App',
        gitHub: "https://",
        deployed: "https://",
        image: "./Images/whatev.png",
        description: "this is a short desc....."
    },

]


function Projects () {
    return (
        <div>
            {
                portfolioProjects.map((project, i) => (
                    <div key={`${project}_${i}`} style={{backgroundImage: url(project.image)}}>
                        <h2>{project.name}</h2>
                        <img src={project.image} />
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