import projet1 from "../assets/projet1.png"
import projet3 from "../assets/projet3.png"
import projet2 from "../assets/projet2.png"
export const HERO_CONTENT = "Développeuse web junior spécialisée dans la stack MERN, je suis passionnée par la création de solutions web modernes et efficaces. En consolidant mes compétences en développement front-end et back-end, j’aborde chaque projet avec curiosité, rigueur et le souci d’un code propre. Je m’investis pleinement dans l’apprentissage des technologies actuelles afin de proposer des applications performantes et adaptées aux besoins réels.";

export const ABOUT_CONTENT = "Titulaire d’une licence en informatique appliquée à la gestion, je me spécialise dans le développement web full-stack avec la stack MERN. Lors de mon Projet de Fin d’Études, j’ai travaillé pour la première fois avec cette stack, qui m’a particulièrement attirée par sa polyvalence et son efficacité. Mon parcours est guidé par l’autoformation, l’exploration de technologies variées et une forte capacité à résoudre des problèmes. Je suis engagée dans une démarche de progression continue, avec pour objectif de concevoir des interfaces web fonctionnelles, esthétiques et impactantes.";

export const EXPERIENCES = [
    {
        year: 2024,
        role: 'Stagiaire en développement web',
        company: 'Amen Bank',
        description: 'Développement d’une application bancaire incluant la conception de l’interface utilisateur et la réalisation d’un tableau de bord complet. Le projet visait à créer une expérience intuitive et facile d’utilisation, tout en assurant une navigation fluide et un accès optimal aux fonctionnalités bancaires.',
        technologies: ['React Js', 'Express Js', 'Node Js', 'MongoDB', 'Tailwindcss']
    },
];

export const PROJECTS = [
    {
        url: "https://stylike-frontend.onrender.com/",
        title: "Stylike – Site E-commerce de vêtements (MERN Stack)",
        image: projet1,
        description:
            "Stylike est un site e-commerce full-stack développé avec la stack MERN , dédié à la vente de vêtements. Il propose une interface client fluide avec gestion de panier, commande, et paiement (Stripe ou paiement à la livraison), ainsi qu’un tableau de bord administrateur sécurisé permettant de gérer les produits et les commandes. Le projet intègre une authentification via JWT, l’hébergement sur Render, le stockage d’images via Cloudinary, et la surveillance avec UptimeRobot.",
        technologies: ["React (Vite)", "Node.js", "MongoDB Atlas", "Express.js", "TailwindCSS", "Axios", "Stripe", "Cloudinary", "JWT"]
    },
    {
        url: "https://webgenius-beta.vercel.app/",
        title: "Web Genius Solutions",
        image: projet3,
        description:
            "Web Genius Solutions est un site professionnel proposant des services de développement web et mobile sur mesure, " +
            "avec un fort accent sur le front-end pour offrir des interfaces modernes, élégantes et entièrement responsive. " +
            "Ce projet met en avant des solutions personnalisées adaptées aux besoins spécifiques des entreprises, " +
            "en assurant une expérience utilisateur optimisée sur tous les supports (ordinateurs, tablettes, mobiles). " +
            "La partie backend est présente mais allégée, le focus principal restant sur la qualité et la réactivité du front-end.",
        technologies: ["React", "Node.js", "MongoDB", "Express.js", "TailwindCSS"]
    },
    {
    url: "https://mealora.vercel.app/",
    title: "Mealora – Site vitrine de cuisine tunisienne",
    image: projet2,
    description:
        "Mealora est un site vitrine moderne dédié à la cuisine tunisienne, mettant en valeur des plats traditionnels à travers une interface élégante et responsive. Le site propose une expérience utilisateur immersive, avec une navigation fluide, des images alléchantes, et une mise en page soignée. Ce projet met l’accent sur le design et la présentation des spécialités culinaires dans un style contemporain, respectant l'identité culturelle. Il est déployé sur Vercel et optimisé pour le SEO.",
    technologies: ["React", "Vite", "TailwindCSS", "JavaScript", "Vercel"]
}

]


export const CONTACT = {
    address: "8024 Nabeul Tunisia",
    PhoneNo: "+216 54 121 578",
    email: "yessminbouchehed@gmail.com"

}
