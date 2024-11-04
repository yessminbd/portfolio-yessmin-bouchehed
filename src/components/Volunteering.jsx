import volunteeringPic from "../assets/volunteering.jpeg"
const Volunteering = () => {
    return (
        <div className=" border-b border-neutral-900 pb-20 ">
            <h1 className="text-3xl text-center my-10 ">Volunteer Experiences</h1>
            <div className="flex flex-wrap ">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img src={volunteeringPic} alt="About me"
                            className="rounded w-full max-w-md h-96 object-cover"
                        />
                    </div>

                </div>
                <div className=" w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-3 lg:py-14 font-mono tracking-tighter  lg:text-lg  ">During my time with the Health and First Aid Club at FSEG Sfax, I served as Financial Officer from 2022 to 2023, overseeing budgets and ensuring resources were effectively managed for our initiatives. In 2024, I took on the role of Secretary General, leading and coordinating activities that help support and educate others in health and first aid. Our efforts focus on community well-being, from organizing training sessions to providing resources, all with the goal of empowering people to help one another.</p>
                    </div>
                </div>

            </div></div>
    )
}

export default Volunteering