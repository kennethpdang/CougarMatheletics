// File Description: This is a dynamic webpage for each username.

// Main Component
export default function UsernamePage(props) {  
    return (
        <main>
            <WelcomeWidget />
            Events Completed: <br></br>
            Things Purchased With Points: 
        </main>
    );
}

// Welcoming Widget:
function WelcomeWidget() {
    return(
        <>
            <h2> Welcome </h2>
            <h3> Kenneth P. Dang </h3>
            <h4> Current Points: 1000 </h4>
            <h4> Events Completed: 1274</h4>
        </>
    );
}

// Completed Events Card:
function CompletedEventsCard() {
    return(
        <p> Rank: </p>
    );
}