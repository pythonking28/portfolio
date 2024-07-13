import Image from "next/image"
const Hero = () => {
  return (
    <div className="flex items-center justify-around gap-10 h-[90vh]">
        <div className="w-[40%]">
            <div className="hero-text">
                <h3>Hello, It's Me</h3>
                <h1>Niraj Kumar Thakur</h1>
                <h3>And I'm a Web Developer</h3>
            </div>
            <p>I am a passionate Web Developer dedicated to leveraging emerging technologies to create innovative, user-centric web experiences. I thrive in dynamic environments, constantly adapting to new tech trends.</p>
        </div>
        <div className="w-[50%] h-[50%]">
            <Image className="object-cover w-48 h-48" src="/images/profile.png" alt="Profile" width={200} height={200} />
        </div>
    </div>
  )
}
export default Hero