// File Description: This page is for both admin and users to sign in and view their account.

// Packages to Import:
import Link from 'next/link';

// Main Component
export default function LogInandSignOutPage(props) {  
    return (
        <main>
            <h1> Enter Here: </h1>
            <h3> Log In </h3>
            <Link href = '/Sign-Up-Page'>
                <h3> Sign - Up </h3>
            </Link>
        </main>
    );
}