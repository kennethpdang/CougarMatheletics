// This component is the navigation bar on your pages.

// Packages to Import:
import Link from 'next/link';

// Top navbar
export default function NavigationBar() {
    const user = null;
    const username = "Kenneth";

    return (
        <nav>
            <ul>
                <li>
                    {/* This is a link to the homepage. */}
                    <Link href = "/">
                        <button> HOME </button>
                    </Link>
                </li>

                {/* Directories to show when user is signed in and has a username. */}
                {username && (
                    <>
                        <li>
                            <Link href = "/">
                                <button> Home </button>
                            </Link>
                        </li>
                        <li>
                            <Link href = "/Upcoming-Events">
                                <button> Upcoming Events </button> 
                            </Link>
                        </li>
                        <li>
                            <Link href = "/Create-Events">
                                <button> Create Events </button> 
                            </Link>
                        </li>
                        {/* This is temporary, replace <button> tag with image and source later. */}
                        <li>
                            <Link href = {`/${username}`}>
                                <button> My Profile </button>
                            </Link>
                        </li>
                        <li>
                            <Link href = "/About-Me">
                                <button> About Me / My Information </button>
                            </Link>
                        </li>
                        <li>
                            <Link href = "/Write-a-Post">
                                <button> Write a Post </button>
                            </Link>
                        </li>
                        <li>
                            <Link href = "/About-Us">
                                <button> About Us </button>
                            </Link>
                        </li>
                        <li>
                            <Link href = "/LogOut">
                                <button> Log Out </button>
                            </Link>
                        </li>
                    </>
                )}

                {/* Directories to show when user has not signed in and has no username. */}
                {!username && (
                    <>
                        <li>
                            <Link href = "/">
                                <button> Home </button>
                            </Link>
                        </li> 
                        <li>
                            <Link href = "/Upcoming-Events">
                                <button> Upcoming Events </button>
                            </Link>
                        </li>
                        <li> 
                            <Link href = "/Log-In-and-Sign-Up">
                                <button> Log-In/Sign-Up </button> 
                            </Link>
                        </li>
                        <li>
                            <Link href = "/About-Us">
                                <button> About Us </button>
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}
