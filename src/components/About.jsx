import aboutPic from "../assets/about.jpeg"
import { ABOUT_CONTENT } from "../constants"
const About = () => {
    return (
        <div className=" border-b border-neutral-900 pb-20 ">
            <h1 className=" text-3xl text-center my-10 ">À propos de moi</h1>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img src={aboutPic} alt="About me"
                            className="rounded w-full max-w-md h-auto object-contain"
                        />
                    </div>
                </div>
                <div className=" w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-3 lg:py-14 font-mono tracking-tighter lg:text-lg  ">{ABOUT_CONTENT}</p>
                    </div>
                </div>
            </div></div>
    )
}

export default About