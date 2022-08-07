// File description: This is the footer component for all the pages on your website.

// Packages to Import:
import Link from 'next/link';
import Image from 'next/image'
import { faHome } from "@fortawesome/free-solid-svg-icons"; // Icons to use on this page.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Gives the font awesome icon component to send icons into, accept props called icon.
import { faDiscord, faInstagram, faSquareYoutube, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';

// Bottom Footer:
export default function Footer() {
    return (
        <footer id = "footer">
            <center>
                <p> Follow us on: </p>
                <ul id = "footer_icon_spanner">
                    <li> <a href = "https://www.youtube.com/channel/UCxMFQFQGY8Ve-hHU0U7eBHQ/featured" target = "_blank"> <FontAwesomeIcon icon = { faSquareYoutube } /> </a> </li>
                    <li> <a href = "https://www.instagram.com/coogmathletics/" target = "_blank"> <FontAwesomeIcon icon = { faInstagram } /> </a> </li>
                    <li> <a href = " https://discord.gg/J7K4JRt" target = "_blank"> <FontAwesomeIcon icon = { faDiscord } /> </a> </li>
                    <li> <a href = "https://twitter.com/COOGMATHLETICS" target = "_blank"> <FontAwesomeIcon icon = { faTwitter } /> </a> </li>
                </ul>
                <p> © 2022-2023 CougarMatheletics </p>
            </center>
        </footer>
    );
}