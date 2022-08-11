// File Description: This page is for both admin and users to sign in and view their account.

// Packages to Import:
import Link from 'next/link';
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons"; // Icons to use on this page.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Gives the font awesome icon component to send icons into, accept props called icon.

// Main Component
export default function LogInandSignOutPage(props) {  
    return (
        <main id = "login_and_signout_main">
            <form id = "login_form">
                <center> <h2> Log In Here! </h2> </center>
                <legend for = "username_input"> Username </legend>
                <center> <input type = "text" placeholder = "ElonMusk21" id = "username_input"></input> </center>
                <legend for = "password_input"> Password </legend>
                <center> <input type = "password" placeholder = "DogeCoin" id = "password_input"></input> </center>
                <button className = "general_button"> <FontAwesomeIcon icon = {faArrowRightToBracket} /> Log In </button>
            </form>
        </main>
    );
}