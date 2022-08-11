// File Description: This page is to display all your upcoming events.

// Packages to Import
import Link from "next/link";
import Image from "next/image";

// Main Component
export default function UpcomingEventsPage(props) {  
    return (
        <main id = "upcoming_events_main">
                <div id = "upcoming_events_grid_layout">
                    <div id = "upcoming_events_slideshow">
                        <Image src = "/../public/EB1.png" layout = "fill" width={100} height={100} />
                    </div>
                    <div id = "upcoming_events_slideshow_text">
                        <h2> Interested in Graduate School? </h2>
                        <p> Interested in graduate school for mathematics? Do you want to learn what it takes? Do you want to know what it is about and what it entails? 
                        Come join us virtually or in person along with the famous mathematcian Dr. Peyam from his YouTube channel in the PGH conference room on Monday May 16, 2022
                        at 7:00 pm. </p> 
                    </div>
                    <div id = "upcoming_events_slider">
                        <div className = "upcoming_event_card">
                            <Image src = "/../public/event 1 - jeopardy night.png" layout = "fill" width = {100} height = {100} />
                        </div>
                        <div className = "upcoming_event_card">
                            <Image src = "/../public/event 2 - LaTeX workshop.png" layout = "fill" width = {100} height = {100} />
                        </div>
                        <div className = "upcoming_event_card">
                            <Image src = "/../public/event 3 - Math Competition.png" layout = "fill" width = {100} height = {100} />
                        </div>
                        <div className = "upcoming_event_card">
                            <Image src = "/../public/event 1 - jeopardy night.png" layout = "fill" width = {100} height = {100} />
                        </div>
                        <div className = "upcoming_event_card">
                            <Image src = "/../public/event 2 - LaTeX workshop.png" layout = "fill" width = {100} height = {100} />
                        </div>
                        <div className = "upcoming_event_card">
                            <Image src = "/../public/event 3 - Math Competition.png" layout = "fill" width = {100} height = {100} />
                        </div>
                    </div>
                </div>
        </main>
    );
}