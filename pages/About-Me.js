// File Description: This page is for users and admins to fill out information regarding contact information, hobbies, and to create banners. Results would display to other pages like the
// About Us page.

// Packages to Import:
import Image from 'next/image';

// Main Component:
export default function AboutMePage(props) {  
    return (
        <main id = "about_me_main">
            <div id = "about_me_grid">
                <WelcomingWidget />
                <OfficerInformationForm />
                <CreateEventWidget />
                <SideInformationWidget />
            </div>
        </main>
    );
}

// Welcoming Text Widget:
function WelcomingWidget() {
    return (
        <div id = "about_me_welcome_component">
            <div id = "about_me_welcome_component_profile_picture">
                <Image src = "/../public/head_alizarin.png" height = {100} width = {100} layout = "fill" />
            </div>
            <div id = "about_me_welcome_component_profile_welcoming">
                <h2> Welcome Caryolyn Nguyen </h2>
                <p> You Are: Treasurer of Cougar Matheletics </p> 
                <p> Today is March 16, 2022 </p>
            </div>
        </div>
    );
}

// About Officer Widget:
function OfficerInformationForm() {
    return(
        <form id = "about_me_officer_form_component">
            <h3 id = "officer_form_about_me_legend"> About Me </h3>
            <textarea id = "officer_form_component_about_me_text_area"></textarea>
            <h3 id = "officer_form_hobbies_legend"> Hobbies </h3>
            <input type = "text" id = "officer_form_hobbies_text_area"></input>
            <h3 id = "officer_form_date_of_birth_legend"> Date of Birth </h3>
            <button id = "officer_form_submit_button"> Submit </button>
        </form>
    );
}

// Side Information About the Website:
function SideInformationWidget() {
    return(
        <div id = "about_me_side_information_component">
            <h2> What is the purpose fo this website? </h2>
            <p> This website was developed by Kenneth Dang </p> 
            <h2> Note to new officers: </h2>
            <p> For every new officer, it is highly recommended to watch this incredibly short clip. </p> 
            <h2> How to use this website? </h2>
            <p> This website is pretty straightfoward to use. </p>
            <h2> Who to call when you need service? </h2>
            <p> You should email kennethpdang@gmail.com when you need credentials for something. </p>
        </div>
    );
}

// Create Event Widget:
function CreateEventWidget() {
    return(
        <div id = "about_me_create_event_component">
            <h3> Event Manager </h3>
            <label> Banner: </label>
            <button> Add File </button>
            <label> Name: </label>
        </div>
    );
}