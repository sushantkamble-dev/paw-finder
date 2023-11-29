import { getIronSession } from "iron-session";
import { ironOptions } from "@/lib/config/iron-config";
import Image from "next/image";
import Link from "next/link";

async function checkSession(context) {
    const session = await getIronSession(context.req, context.res, ironOptions);
    return session;
}

export default function Header () {

    // const sessionCheck = checkSession();
    // console.log(sessionCheck);

    return (
        <header>
            <div id="skip"><Link href="#mainContent">Skip to Main Content</Link></div>
            <h2><Link href="/" title="Home page"><Image src="/logo.svg" width={54} height={54} alt="Pawfinder home"/></Link></h2>
            <nav>
                <ul>
                    <li><Link href="/" alt="header_home">Home</Link></li>
                    <li><Link href="/search?type=dogs&city=Austin&sortBy=ASC&breed=any&age=any&size=any&gender=any">Search</Link></li>
                </ul>
                <ul>
                    <li><Link href="/profile">Profile</Link></li>
                    <li><Link href="/login">Log In</Link></li>
                    <li><Link href="/signup">Sign Up</Link></li>
                </ul>
            </nav>
        </header>
    )
}