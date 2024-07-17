"use client"
import Link from "next/link"
import Image from "next/image"
import Logo from "../../public/images/logo.png"
import { useState } from "react"
const Header = () => {
    const [display, setDisplay] = useState("hidden");
    const navHandler = () => {
        setDisplay("flex")
    }
    const navHandlerExit = () =>{
        setDisplay("hidden")
    }
    return (
        <>
            <div className="w-auto flex items-center justify-between mx-10 py-5 gap-10">
                <div className="w-24 text-6xl font-extrabold">
                    {/* <Image src={Logo} alt="Logo" /> */}
                    N
                </div>
                <div className="hidden sm:flex sm:items-center sm:justify-center sm:gap-10">
                    <div><Link href="#home" className="hover:border-b-2 border-black">Home</Link></div>
                    <div><Link href="#about" className="hover:border-b-2 border-black">About</Link></div>
                    <div><Link href="#skill" className="hover:border-b-2 border-black">Skill</Link></div>
                    <div><Link href="#contact" className="hover:border-b-2 border-black">Contact</Link></div>
                </div>
                <div onClick={navHandler} className="flex items-center flex-col justify-center gap-1 sm:hidden cursor-pointer mr-0">
                    <div className="w-10 h-1 border-black border-2 bg-black rounded-md"></div>
                    <div className="w-10 h-1 border-black border-2 bg-black rounded-md"></div>
                    <div className="w-10 h-1 border-black border-2 bg-black rounded-md"></div>
                </div>
            </div>
            <div>
                <div id="small-nav" className={`${display} flex-col absolute top-0 left-0 w-[100%] bg-black/90 text-white h-[100vh] items-center justify-center  gap-10`}>
                    <div onClick={navHandlerExit} className="flex items-center flex-col justify-center  sm:hidden absolute top-5 right-8 m-10 cursor-pointer">
                        <div className="w-10 h-1 absolute border-white border-2 bg-white rounded-md  rotate-45 "></div>
                        <div className="w-10 h-1 absolute border-white border-2 bg-white rounded-md  -rotate-45 "></div>
                    </div>
                    <div onClick={navHandlerExit}><Link href="#home" className="hover:border-b-2 border-white">Home</Link></div>
                    <div onClick={navHandlerExit}><Link href="#about" className="hover:border-b-2 border-white">About</Link></div>
                    <div onClick={navHandlerExit}><Link href="#skill" className="hover:border-b-2 border-white">Skill</Link></div>
                    <div onClick={navHandlerExit}><Link href="#contact" className="hover:border-b-2 border-white">Contact</Link></div>
                </div>
            </div>
        </>
    )
}
export default Header