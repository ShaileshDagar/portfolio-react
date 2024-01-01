// import Navbar from "./Navbar";

interface project{
    title: string;
    url: string;
    published: Date;
    image_src: string;
}

function Project(project: project) {
    return (
        <div>
            <h3><a href={project.url}>{project.title}</a></h3>
            <img src={project.image_src}/>
            <h6>{project.published.toLocaleString()}</h6>
        </div>
    )
}
export default function Projects() {
    const projects: project[] = [
        {
            title: "gram-text-editor",
            url: "https://github.com/ShaileshDagar/gram-text-editor",
            published: new Date(),
            image_src: "gram-text-editor.jpg",
        },
        {
            title: "Springit - Spring Boot Reddit Clone",
            url: "https://github.com/ShaileshDagar/springit",
            published: new Date(),
            image_src: "spring-boot.jpg",
        }, 
        {
            title: "Arduino - Ping Pong",
            url: "https://www.tinkercad.com/things/8B5LpJXjQRa",
            published: new Date(),
            image_src: "arduino.jpg",
        }, 
        {
            title: "Gatekeeper",
            url: "https://github.com/ShaileshDagar/gateKeeper",
            published: new Date(),
            image_src: "gatekeeper.jpg",
        },
    ]
    return (
        <div>
            <h1>List of Projects:</h1>
            <ul>
                {projects.map((pjct, index) => <li key={index}>{Project(pjct)}</li>)}
            </ul>
        </div>
    )
}