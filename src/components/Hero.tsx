import Image from "next/image"
import Link from "next/link"
const Hero = () => {
  return (
    <div id="about" className="flex items-center flex-col-reverse justify-between sm:flex-row sm:justify-around gap-1 sm:gap-24 lg:gap-50 h-[85vh]">
        <div className="w-auto sm:w-2/3 lg:w-[40%] mx-16 sm:mx-16">
            <div className="text-[10px] sm:text-xs md:text-xl xl:text-3xl tracking-wide mb-2 md:mb-3  xl:mb-5 font-bold">
                <h3 className="">Hello, It's Me</h3>
                <h1 className="text-base sm:text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl tracking-wider">Niraj Kumar Thakur</h1>
                <h3 className="">And I'm a <span className="text-cyan-600">Web Developer</span></h3>
            </div>
            <p className="tracking-wide text-justify text-[10px] sm:text-[15px] lg:text-lg">I'm an enthusiastic web developer that is committed to using new trends in technology to produce creative, user-centric websites. I thrive in dynamic environments, constantly adapting to new advancements.</p>
            <div className="flex gap-10 mt-10 mb-5 h-auto justify-center items-center">
              <Link href="https://www.linkedin.com/in/niraj-thakur-5bbaaa160/" target="_blank" className="border rounded-full p-4"><Image src="/images/linkedin.svg" alt="LinkedinProfile" width={24} height={24} className=""></Image></Link>
              <Link href="https://github.com/pythonking28?tab=repositories" target="_blank" className="border rounded-full p-4"><Image src="/images/github.svg" alt="LinkedinProfile" width={24} height={24} className=""></Image></Link>
              <Link href="https://www.facebook.com/niraj.thakur.52498/" target="_blank" className="border rounded-full p-4"><Image src="/images/facebook.svg" alt="LinkedinProfile" width={24} height={24} className=""></Image></Link>
              <a href="/cv.pdf" target="_blank" download="cv" className="border rounded-full p-4"><Image src="/images/cv.svg" alt="LinkedinProfile" width={24} height={24} className=""></Image></a>
            </div>
            
        </div>
        <div className="w-2/3 mx-auto sm:mx-10 sm:w-[40%] md:w-1/3 xl:w-1/4 flex items-center justify-center">
          <div className="w-full rounded-full shadow-[0_15px_60px_5px_rgba(cyan)] shadow-cyan-200 ">
          <Image className="w-full border-4 rounded-full" src="/images/profileCrop.png" alt="Profile" width={500} height={500} />
          </div>

        </div>
    </div>
  )
}
export default Hero