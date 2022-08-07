// File Description: This component is the navigation bar on your pages.

// Packages to Import:
import Link from 'next/link';
import Image from 'next/image'
import { faHome, faCalendarDay, faCalendarCheck, faIdCard, faPenToSquare, faUsers, faArrowRightToBracket, faArrowRightFromBracket, faUser, faBars } from "@fortawesome/free-solid-svg-icons"; // Icons to use on this page.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Gives the font awesome icon component to send icons into, accept props called icon.

// Top Navigation Bar:
export default function NavigationBar() {
    const user = null;
    const username = null;
    const vertical = false;

    return (
        <header>
            <nav id = "navigation_bar">
                {/* This is a link to the homepage. */}
                <div className = "home_button_wrapper">
                    <Link href = "/">
                        <Image src = {"/../public/CougarMatheleticsLogo.jpg"} alt = "Home Button" width = "50px" height="50px"/>
                    </Link>
                </div>
                <input type = "checkbox" id = "navigation_page_menu"/>
                <label for = "navigation_page_menu" className = "menu-btn"><span></span></label>
                <label for = "navigation_page_menu" className = "close"></label>
                <div id = "navigation_page">
                    <ul>
                        {/* Directories to show when user is signed in and has a username. */}
                        {username && (
                            <>
                                <li>
                                    <Link href = "/">
                                        <a> <FontAwesomeIcon icon = {faHome}/> Home </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href = "/Upcoming-Events">
                                        <a> <FontAwesomeIcon icon = {faCalendarDay} /> Upcoming Events </a> 
                                    </Link>
                                </li>
                                <li>
                                    <Link href = "/Create-Events">
                                        <a> <FontAwesomeIcon icon = {faCalendarCheck} /> Create Events </a> 
                                    </Link>
                                </li>
                                {/* This is temporary, replace <a> tag with image and source later. */}
                                <li>
                                    <Link href = {`/${username}`}>
                                        <a> <FontAwesomeIcon icon = {faUser} /> My Profile </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href = "/About-Me">
                                        <a> <FontAwesomeIcon icon = {faIdCard} /> About Me / My Information </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href = "/Write-a-Post">
                                        <a> <FontAwesomeIcon icon = {faPenToSquare} /> Write a Post </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href = "/About-Us">
                                        <a> <FontAwesomeIcon icon = {faUsers} /> About Us </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href = "/LogOut">
                                        <a> <FontAwesomeIcon icon = {faArrowRightFromBracket} /> Log Out </a>
                                    </Link>
                                </li>
                            </>
                        )}

                        {/* Directories to show when user has not signed in and has no username. */}
                        {!username && (
                            <>
                                <li>
                                    <Link href = "/">
                                        <a> Home </a>
                                    </Link>
                                </li> 
                                <li>
                                    <Link href = "/Upcoming-Events">
                                        <a> Upcoming Events </a>
                                    </Link>
                                </li>
                                <li> 
                                    <Link href = "/Log-In-and-Sign-Up">
                                        <a> <FontAwesomeIcon icon = {faArrowRightToBracket} /> Log-In/Sign-Up </a> 
                                    </Link>
                                </li>
                                <li>
                                    <Link href = "/About-Us">
                                        <a> About Us </a>
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </nav>
        </header>
    );
}