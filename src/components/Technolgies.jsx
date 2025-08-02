import { RiReactjsLine } from "react-icons/ri"
import { SiTailwindcss, SiAxios, SiExpress, SiMongodb, SiNodedotjs, SiCloudinary, SiPostman, SiStripe, SiVite, SiJsonwebtokens, SiDotenv, SiRender } from "react-icons/si"

const Technolgies = () => {
    return (
        <div className="flex flex-col border-b border-neutral-900 pb-20">
            {/* Frontend */}
            <div>
                <h2 className="my-11 text-center text-3xl">Frontend</h2>
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiVite className="text-7xl text-yellow-300" />
                    </div>
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <RiReactjsLine className="text-7xl text-cyan-400" />
                    </div>
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiTailwindcss className="text-7xl text-cyan-400" />
                    </div>
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiAxios className="text-7xl text-sky-500" />
                    </div>
                </div>
            </div>

            {/* Backend */}
            <div>
                <h2 className="my-11 text-center text-3xl">Backend</h2>
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiNodedotjs className="text-7xl text-green-400" />
                    </div>
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiExpress className="text-7xl text-white" />
                    </div>
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiMongodb className="text-7xl text-green-500" />
                    </div>
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiJsonwebtokens className="text-7xl text-orange-500" />
                    </div>
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiDotenv className="text-7xl text-green-300" />
                    </div>
                </div>
            </div>

            {/* Services externes */}
            <div>
                <h2 className="my-11 text-center text-3xl">Services externes</h2>
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiStripe className="text-7xl text-purple-500" />
                    </div>
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiCloudinary className="text-7xl text-blue-400" />
                    </div>
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiPostman className="text-7xl text-orange-500" />
                    </div>
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiRender className="text-7xl text-indigo-400" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technolgies
