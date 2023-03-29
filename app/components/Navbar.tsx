import Link from "next/link"
import { FaYoutube, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa"

export default function Navbar() {
    return (
        <nav className="bg-slate-50 p-4 sticky top-0 drop-shadow-xl z-10">
            <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
                <h1 className="text-3xl font-bold text-black grid place-content-center mb-2 md:mb-0">
                    <Link href="/" className="text-black/90 no-underline hover:text-black">Daniel Cruz</Link>
                </h1>
                <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-black text-4xl lg:text-5xl">
                    <Link className="text-black/90 hover:text-black" href="https://youtube.com/">
                        <FaYoutube />
                    </Link>
                    <Link className="text-black/90 hover:text-black" href="https://instagram.com/danielcruzing">
                        <FaInstagram />
                    </Link>
                    <Link className="text-black/90 hover:text-black" href="https://github.com/scrollhole">
                        <FaGithub />
                    </Link>
                    <Link className="text-black/90 hover:text-black" href="https://twitter.com">
                        <FaTwitter />
                    </Link>
                </div>
            </div>
        </nav>
    )
}