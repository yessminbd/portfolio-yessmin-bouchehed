import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"

const Navbar = () => {
    return (
        <div className=" mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <p className=' text-4xl font-serif '>Y</p><p className='text-3xl font-serif '>b</p>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/yessmin-bouchehed/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/yessminbd" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/yessmin_bouchehed/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://x.com/yessmin_bd" target="_blank" rel="noopener noreferrer">
                    <FaSquareXTwitter />
                </a>
            </div>
        </div>
    )
}

export default Navbar