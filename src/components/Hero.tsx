import Image from "next/image"
const Hero = () => {
  return (
    <div className="flex items-center justify-around gap-10 h-[90vh]">
        <div className="w-[40%]">
            <div className="text-3xl tracking-wide mb-5 font-bold">
                <h3 className="">Hello, It's Me</h3>
                <h1 className="text-6xl  tracking-wider">Niraj Kumar Thakur</h1>
                <h3 className="leading-10">And I'm a <span className="text-cyan-600">Web Developer</span></h3>
            </div>
            <p className="tracking-wide text-justify text-lg">I'm an enthusiastic web developer that is committed to using new trends in technology to produce creative, user-centric websites. I thrive in dynamic environments, constantly adapting to new advancements.</p>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-[50%] rounded-full shadow-[0_15px_60px_5px_rgba(cyan)] shadow-cyan-200 ">
          <Image className="w-full border-4 rounded-full" src="/images/profileCrop.png" alt="Profile" width={500} height={500} />
          </div>

        </div>
    </div>
  )
}
export default Hero