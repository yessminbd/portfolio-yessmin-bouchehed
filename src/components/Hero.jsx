import { HERO_CONTENT } from "../constants"
import profilePic from '../assets/profile.jpg'
const Hero = () => {
    return (
        <div className="border-b border-neutral-900  lg:mb-14 pb-20">
            <div className="flex flex-wrap  ">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className=" pb-4 font-thin text-4xl tracking-tight  lg:text-6xl">Yessmin Bouchehed </h1>
                        <span className="bg-gradient-to-r from-pink-300 via-pink-500 to-pink-800 bg-clip-text text-3xl text-transparent tracking-tight  ">
                            Développeuse Full Stack                        </span>
                        <p className="my-2 max-w-xl py-4 font-mono tracking-tighter  lg:text-lg ">{HERO_CONTENT}</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <img
                            src={profilePic}
                            alt="yessmin bouchehed"
                            className="w-full max-w-md h-auto object-contain rounded"
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero
