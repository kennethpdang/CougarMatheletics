// File Description: This page is to write out club information. What the club is about and other stuff.

// Packages to Import:
import Image from 'next/image';

// Main Component
export default function AboutUsPage(props) {  
    return (
        <main id = "about_us_main">
            <center> <h1> ABOUT US </h1> </center>

            <center> <h2> What is Cougar Matheletics? What does the club do? </h2> </center>
            <p> Cougar matheletics is a social club to promote mathemetics and support mathematicians on their journey throughout college.
            Among other things we: host social events, host various math competitions, facilitate study groups (for courses and for fun) - 
            plan/participate in volunteer events, and maintain a communication platform (discord) channel for UH Math enthusiasts (where you can ask
            math related questions). </p>

            <center> <h2> Are there any dues? How does membership work? How does induction work? </h2> </center>
            <p> There are different teirs for membership, each with different perks ranging from $5 to $25 (more information later).
            [Insert how membership works]. Members of the club would have a specially designated account on this platform/website given to them. 
            They can track the events they have attended, monitor their rewards, and redeem their awards. Note that you don't have to be a paid member
            to attend some of the events. These are general events. Rewards are used to promote attendance to our events.
            </p>

            <center> <h2> Do I need to be an a math major to be here? </h2> </center>
            <p> By no means! We have math enthusiasts from all backgrounds. Anyone is welcomed here. It doesn't matter if you are a graduate or undergraduate
            student. Neither does the major matter as well. However, most events are going to be math oriented. </p>

            <center> <h2> Current Club Officers </h2> </center>
            <center>
                <div className = "aboutuspage_officer_info_card">
                    <div className = "aboutuspage_officer_image">
                        <Image src = "/../public/head_alizarin.png" alt = "Picture of a Cougar Matheletics officer." width = {100} height = {100} layout = "fill" />
                    </div>
                    <div className = "aboutuspage_officer_info_card_text_info">
                        <h3> Ryan Nguyen </h3>
                        <h4> President of Cougar Matheletics </h4>
                        <h5> Bachelor's of Mathematics </h5> 
                        <p> Enjoys mathematics, particularly applied math. </p>
                    </div>
                </div>
            </center>
            <center>
                <div className = "aboutuspage_officer_info_card">
                    <div className = "aboutuspage_officer_image">
                        <Image src = "/../public/head_alizarin.png" alt = "Picture of a Cougar Matheletics officer." width = {100} height = {100} layout = "fill" />
                    </div>
                    <div className = "aboutuspage_officer_info_card_text_info">
                        <h3> Kat Wong </h3>
                        <h4> Vice President of Cougar Matheletics </h4>
                        <h5> Bachelor's of Mathemetics </h5>
                        <p> Enjoys mathematics, particularly applied math. </p>
                    </div>
                </div>
            </center>
            <center>
                <div className = "aboutuspage_officer_info_card">
                    <div className = "aboutuspage_officer_image">
                        <Image src = "/../public/head_alizarin.png" alt = "Picture of a Cougar Matheletics officer." width = {100} height = {100} layout = "fill" />
                    </div>
                    <div className = "aboutuspage_officer_info_card_text_info">
                        <h3> Carolyn Nguyen </h3>
                        <h4> Public Relation's Manager </h4>
                        <h5> Bachelor's of Mathemetics </h5>
                        <p> Enjoys mathematics, particularly applied math. </p>
                    </div>
                </div>
            </center>
            <center>
                <div className = "aboutuspage_officer_info_card">
                    <div className = "aboutuspage_officer_image">
                        <Image src = "/../public/head_alizarin.png" alt = "Picture of a Cougar Matheletics officer." width = {100} height = {100} layout = "fill" />
                    </div>
                    <div className = "aboutuspage_officer_info_card_text_info">
                        <h3> Efrain Lopez </h3>
                        <h4> Secretary of Cougar Matheletics </h4>
                        <h5> Bachelor's of Computer Science </h5>
                        <p> Enjoys mathematics, particularly applied math. </p>
                    </div>
                </div>
            </center>
            <center>
                <div className = "aboutuspage_officer_info_card">
                    <div className = "aboutuspage_officer_image">
                        <Image src = "/../public/head_alizarin.png" alt = "Picture of a Cougar Matheletics officer." width = {100} height = {100} layout = "fill" />
                    </div>
                    <div className = "aboutuspage_officer_info_card_text_info">
                        <h3> Aditya Suri </h3>
                        <h4> Treasurer of Cougar Matheletics </h4>
                        <h5> General Studies </h5>
                        <p> Enjoys mathematics, particularly applied math. </p>
                    </div>
                </div>
            </center>
        </main>
    );
}