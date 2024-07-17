import Image from "next/image"
const Skill = () => {
  return (
    <div id="skill" className="h-auto w-[100%] pb-10 bg-gray-100">
        <h1 className="px-auto text-center mt-[0.5rem] pt-10 text-2xl sm:text-4xl lg:text-6xl font-bold">SKILLS</h1>
        <div className="flex flex-wrap gap-10 mx-auto w-[50%] md:gap-20 p-6 items-center justify-center flex-grow">
            <div className="border-solid border-2 p-6 flex flex-col justify-center items-center gap-4 rounded-2xl hover:shadow-lg hover:shadow-[#FF5733]">
                <Image src="/images/skill/html.png" alt="html image" width={90} height={90}/>
                <h3 className="font-bold text-lg md:text-xl ">HTML</h3>
            </div>
            <div className="border-solid border-2 p-6 flex flex-col justify-center items-center gap-4 rounded-2xl hover:shadow-lg hover:shadow-[#3FA2F6] ">
                <Image src="/images/skill/css.png" alt="html image" width={90} height={90}/>
                <h3 className="font-bold text-lg md:text-xl ">CSS</h3>
            </div>
            <div className="border-solid border-2 p-6 flex flex-col justify-center items-center gap-4 rounded-2xl hover:shadow-lg hover:shadow-[#FFDE4D]">
                <Image src="/images/skill/js.png" alt="html image" width={90} height={90}/>
                <h3 className="font-bold text-lg md:text-xl ">JavaScript</h3>
            </div>
            <div className="border-solid border-2 p-6 flex flex-col justify-center items-center gap-4 rounded-2xl hover:shadow-lg hover:shadow-[#758694]">
                <Image src="/images/skill/express.png" alt="html image" width={90} height={90}/>
                <h3 className="font-bold text-lg md:text-xl ">Express</h3>
            </div>
            <div className="border-solid border-2 p-6 flex flex-col justify-center items-center gap-4 rounded-2xl hover:shadow-lg hover:shadow-[#3FA2F6]">
                <Image src="/images/skill/react.png" alt="html image" width={90} height={90}/>
                <h3 className="font-bold text-lg md:text-xl ">React</h3>
            </div>
            <div className="border-solid border-2 p-6 flex flex-col justify-center items-center gap-4 rounded-2xl hover:shadow-lg hover:shadow-[#151515]">
                <Image src="/images/skill/next.png" alt="html image" width={90} height={90}/>
                <h3 className="font-bold text-lg md:text-xl ">Next</h3>
            </div>
        </div>
    </div>
  )
}
export default Skill