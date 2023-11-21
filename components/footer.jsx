import Image from "next/image";
import Link from "next/link";

export default function Footer () {
    return (
        <footer>
            <Link href="/" title="Home page"><Image src="/logo_inverted.svg" width={54} height={54} alt="Pawfinder footer"/></Link>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/search">Search</Link></li>
                    {/* <li><Link href="/about">About Us</Link></li> */}
                    <li><Link href="/login">Log In</Link></li>
                    <li><Link href="/signup">Sign Up</Link></li>
                </ul>
            </nav>
        </footer>
    )
}