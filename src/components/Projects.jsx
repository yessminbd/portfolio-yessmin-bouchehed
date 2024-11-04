import { PROJECTS } from "../constants"


const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <h2 className="mt-10  text-center mb-16 text-3xl">Projects</h2>
            {PROJECTS.map((project, index) => (
                <div key={index} className="mb-10 flex lg:flex-wrap  lg:justify-center">
                    <div className="w-full lg:w-1/4">
                        <img src={project.image} alt={project.title} width={150} height={150} className="mb-6 rounded" />
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">{project.title}</h6>
                        <p className="mb-4 text-neutral-400">{project.description}</p>
                        {project.technologies.map((tech, index) => (
                            <span key={index} className="mr-2 mt-2 rounded bg-neutral-700 px-2 text-sm font-medium inline-block max-w-full break-words">{tech}</span>
                        ))}
                    </div>
                </div>

            ))}
        </div>
    )
}

export default Projects