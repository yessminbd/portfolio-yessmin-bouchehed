import { EXPERIENCES } from "../constants"

const Experiences = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <h2 className="my-10 text-center mb-16 text-3xl ">Experiences</h2>
            <div>{EXPERIENCES.map((experience, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                        <p className="mb-2 text-sm text-neutral-400 ">{experience.year}</p>
                    </div>
                    <div className="w-full lg:w-3/4 max-w-xl">
                        <h6 className="mb-2 font-semibold">{experience.role} - <span className="text-sm text-pink-100">{experience.company}</span></h6>
                        <p className="mb-4 text-neutral-400">{experience.description}</p>
                        {experience.technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="mr-2 mt-4 rounded bg-neutral-700 px-2 py-1 text-sm font-medium inline-block max-w-full break-words"
                            >
                                {tech}
                            </span>))}
                    </div>

                </div>
            ))}
            </div>
        </div>
    )
}

export default Experiences