import { DiDart, DiJava, DiJavascript1, } from "react-icons/di"
import { FaBootstrap, FaPhp, } from "react-icons/fa"
import { RiReactjsLine } from "react-icons/ri"
import { SiExpress, SiFlutter, SiMongodb, SiTailwindcss, SiTypescript } from "react-icons/si"
import { DiMysql } from "react-icons/di"
 import { GrOracle } from "react-icons/gr"
const Technolgies = () => {
    return (
        <div className="flex flex-col border-b border-neutral-900 pb-20">
            <div >
                <h2 className="my-11 text-center text-3xl lg:text-2xl">Programming languages</h2>
                <div className="flex flex-wrap items-center justify-center gap-4 ">
                    <div className=" rounded-2xl border-4 border-neutral-800 p-4">
                        <DiJava className="text-7xl text-white" />
                    </div>
                    <div className=" rounded-2xl border-4 border-neutral-800 p-4">
                        <DiJavascript1 className="text-7xl bg-amber-500 text-black rounded" />
                    </div>
                    <div className=" rounded-2xl border-4 border-neutral-800 p-4">
                        <SiTypescript className="text-7xl text-blue-600 bg-white rounded" />
                    </div>
                    <div className=" rounded-2xl border-4 border-neutral-800 p-4">
                        <FaPhp className="text-7xl bg-purple-500 text-white rounded" />
                    </div>
                    <div className=" rounded-2xl border-4 border-neutral-800 p-4">
                        <DiDart className="text-7xl text-blue-500" />
                    </div>
                </div>
            </div>
            <div>
                <h2 className="my-11 text-center text-3xl">Frameworks & Libraries</h2>
                <div className="flex flex-wrap items-center justify-center gap-4 ">
                    <div className=" rounded-2xl border-4 border-neutral-800 p-4">
                        <RiReactjsLine className="text-7xl text-cyan-400" />
                    </div>
                    <div className=" rounded-2xl border-4 border-neutral-800 p-4">
                        <SiFlutter className="text-7xl text-blue-400" />
                    </div>
                    <div className=" rounded-2xl border-4 border-neutral-800 p-4">
                        < SiExpress className="text-7xl text-white " />
                    </div>
                    <div className=" rounded-2xl border-4 border-neutral-800 p-4">
                        <SiTailwindcss className="text-7xl text-cyan-400" />
                    </div>
                    <div className=" rounded-2xl border-4 border-neutral-800 p-4">
                        <   FaBootstrap className="text-7xl text-purple-700 " />
                    </div>

                </div>
            </div>
            <div>
                <h2 className="my-11 text-center text-3xl">Database</h2>
                <div className="flex flex-wrap items-center justify-center gap-4 ">
                    <div className=" rounded-2xl border-4 border-neutral-800 p-4">
                        <SiMongodb className="text-7xl text-green-500" />
                    </div>
                   
                    <div className=" rounded-2xl border-4 border-neutral-800 p-4">
                        <DiMysql className="text-7xl text-cyan-400" />
                    </div>
                    <div className=" rounded-2xl border-4 border-neutral-800 p-4">
                        < GrOracle className="text-7xl text-red-700 " />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Technolgies