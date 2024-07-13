import Link from "next/link"
import Image from "next/image"
import Logo from "../../public/images/logo.png"
const Header = () => {
    return (
        <div className="w-auto flex items-center justify-between mx-20 py-5">
            <div className="w-24">
                {/* <Image src={Logo} alt="Logo" /> */}
                Logo
            </div>
            <div className="flex items-center justify-center gap-10">
                <div><Link href="#">Home</Link></div>
                <div><Link href="#">About</Link></div>
                <div><Link href="#">Skill</Link></div>
                <div><Link href="#">Contact</Link></div>
            </div>
        </div>
    )
}
export default Header