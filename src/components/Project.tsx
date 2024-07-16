import Image from "next/image"
import Link from "next/link";
const Project = () => {
    return (
        <div className="h-auto w-[100%] pb-10 bg-gray-400">
            <h1 className="px-auto text-center pt-10 text-2xl sm:text-4xl lg:text-6xl font-bold">PROJECTS</h1>
            <div className="flex flex-wrap gap-10 mx-auto w-[80%] md:gap-20 p-6 items-center justify-center">
                <div className="object-cover flex flex-col justify-center items-center gap-4 rounded-2xl hover:shadow-lg hover:shadow-[#807f7c] relative transition-all project-code">
                    <Image src="/images/project/youtube.jpg" className="border-solid border-2 rounded-2xl" alt="html image" width={400} height={400} />
                    <div className="hidden button-wrapper py-2 px-5">
                        <h1 className="text-white font-medium text-xl">Youtube-Backend</h1>
                        <div className="flex gap-10">
                            <button className="py-2 px-5 ">
                                <Link href="https://github.com/pythonking28/youtubeClone" target="_blank">Code</Link>
                            </button>
                        </div>

                    </div>

                </div>
                <div className="object-cover flex flex-col justify-center items-center gap-4 rounded-2xl hover:shadow-lg hover:shadow-[#3FA2F6] relative transition-all project-code ">
                    <Image src="/images/project/veg-restro.jpg" className="border-solid border-2 rounded-2xl" alt="html image" width={400} height={400} />
                    <div className="hidden button-wrapper py-2 px-5">
                        <h1 className="text-white font-medium text-xl">Veg-Restro</h1>
                        <div className="flex gap-10">
                            <button className="py-2 px-5 ">
                                <Link href="https://github.com/pythonking28/Veg-Restro" target="_blank">Code</Link>
                            </button>
                            <button className="py-2 px-5 ">
                                <Link href="https://veg-restro.vercel.app/" target="_blank">Live</Link>
                            </button>
                        </div>
                    </div>



                </div>
                <div className="object-cover flex flex-col justify-center items-center gap-4 rounded-2xl hover:shadow-lg hover:shadow-[#FFDE4D] relative transition-all project-code">
                    <Image src="/images/project/tasknote.jpg" className="border-solid border-2 rounded-2xl" alt="html image" width={400} height={400} />
                    <div className="hidden button-wrapper py-2 px-5">
                        <h1 className="text-white font-medium text-xl">Task-Note</h1>
                        <div className="flex gap-10">
                            <button className="py-2 px-5 ">
                                <Link href="https://tasknote-niraj.netlify.app/" target="_blank">Live</Link>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Project