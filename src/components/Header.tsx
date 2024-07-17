import Link from "next/link"
import Image from "next/image"
import Logo from "../../public/images/logo.png"
const Header = () => {
    return (
        <div className="w-auto flex items-center justify-between mx-20 py-5 gap-10">
            <div className="w-24 text-6xl font-extrabold">
                {/* <Image src={Logo} alt="Logo" /> */}
                N
            </div>
            <div className="flex items-center justify-center gap-10">
                <div><Link href="#home">Home</Link></div>
                <div><Link href="#about">About</Link></div>
                <div><Link href="#skill">Skill</Link></div>
                <div><Link href="#contact">Contact</Link></div>
            </div>
        </div>
    )
}
export default Header