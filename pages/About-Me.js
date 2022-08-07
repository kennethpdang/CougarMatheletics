// File Description: This page is for users and admins to fill out information regarding contact information and other information.

// Main Component:
export default function AboutMePage(props) {  
    return (
        <main>
            <WelcomingWidget />
            <OfficerInformationForm />
            <CreateEventWidget />
            <SideInformationWidget />
        </main>
    );
}

// Welcoming Text Widget:
function WelcomingWidget() {
    return (
        <>
            <h2> Welcome Caryolyn Nguyen </h2>
            <p> Today is March 16, 2022 </p>       
        </>
    );
}

// About Officer Widget:
function OfficerInformationForm() {
    return(
        <>
            <h3> About Me </h3>
            <h3> Hobbies </h3>
            <h3> Date of Birth </h3>
            <button> Submit </button>
        </>
    );
}

// Side Information About the Website:
function SideInformationWidget() {
    return(
        <>
            <h2> What is the purpose fo this website? </h2>
            <h2> Note to new officers </h2>
            <h2> How to use this website? </h2>
            <h2> Who to call when you need service? </h2>
        </>
    );
}

// Create Event Widget:
function CreateEventWidget() {
    return(
        <>
            <h3> Event Manager </h3>
            <label> Banner: </label>
            <button> Add File </button>
            <label> Name: </label>
        </>
    );
}