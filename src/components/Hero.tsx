import Image from "next/image"
const Hero = () => {
  return (
    <div className="flex items-center justify-around gap-24 lg:gap-50  h-[90vh]">
        <div className="w-2/3 lg:w-[40%]">
            <div className="text-[10px] sm:text-xs md:text-xl xl:text-3xl tracking-wide mb-2 md:mb-3  xl:mb-5 font-bold">
                <h3 className="">Hello, It's Me</h3>
                <h1 className="text-base sm:text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl tracking-wider">Niraj Kumar Thakur</h1>
                <h3 className="">And I'm a <span className="text-cyan-600">Web Developer</span></h3>
            </div>
            <p className="tracking-wide text-justify text-[10px] sm:text-[15px] lg:text-lg">I'm an enthusiastic web developer that is committed to using new trends in technology to produce creative, user-centric websites. I thrive in dynamic environments, constantly adapting to new advancements.</p>
        </div>
        <div className="w-[40%] md:w-1/3 xl:w-1/4 flex items-center justify-center">
          <div className="w-full rounded-full shadow-[0_15px_60px_5px_rgba(cyan)] shadow-cyan-200 ">
          <Image className="w-full border-4 rounded-full" src="/images/profileCrop.png" alt="Profile" width={500} height={500} />
          </div>

        </div>
    </div>
  )
}
export default Hero