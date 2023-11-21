import Image from "next/image";
import Link from "next/link";

export default function Header () {
    return (
        <header>
            <div id="skip"><a href="#content">Skip to Main Content</a></div>
            <h2><Link href="/" title="Home page"><Image src="/logo.svg" width={54} height={54} alt="Pawfinder home"/></Link></h2>
            <nav>
                <ul>
                    <li><Link href="/" alt="header_home">Home</Link></li>
                    <li><Link href="/search">Search</Link></li>
                    {/* <li><Link href="/about">About Us</Link></li> */}
                </ul>
                <ul>
                    <li><Link href="/login">Log In</Link></li>
                    <li><Link href="/signup">Sign Up</Link></li>
                </ul>
            </nav>
        </header>
    )
}