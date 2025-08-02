import volunteeringPic from "../assets/volunteering.jpeg"
const Volunteering = () => {
    return (
        <div className=" border-b border-neutral-900 pb-20 ">
            <h1 className="text-3xl text-center my-10 ">Expériences de bénévolat</h1>
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
                        <p className="my-2 max-w-xl py-3 lg:py-14 font-mono tracking-tighter lg:text-lg">
                            Durant mon engagement au sein du Club Santé et Secourisme de la FSEG Sfax, j’ai occupé le poste de Responsable Financier de 2022 à 2023, où j’ai supervisé les budgets et assuré une gestion efficace des ressources pour nos initiatives. En 2024, j’ai pris la fonction de Secrétaire Général, coordonnant les activités visant à soutenir et sensibiliser la communauté à la santé et au secourisme.
                            Cette expérience a été pour moi un véritable entraînement à l’organisation et à la gestion simultanée d’une charge de travail importante tout en poursuivant mes études.
                            Nos actions portaient sur le bien-être collectif, de l’organisation de sessions de formation à la mise à disposition de ressources, avec pour objectif d’autonomiser les individus à s’entraider.
                        </p>

                    </div>
                </div>

            </div></div>
    )
}

export default Volunteering