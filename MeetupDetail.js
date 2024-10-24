import React from 'react';
import classes from './MeetupDetail.module.css';
import { useRouter } from 'next/router'; // Import the useRouter hook

function MeetupDetail(props) {
    const router = useRouter(); // Initialize the router

    // Function to handle navigation to the home page for the last button

    //Next js
    const navigateToHomePage = () => {
        router.push('/'); // Navigate to the home page
    };

    //React js
    const navigateToHomePageReact = () => {
        window.location.href = '/'; // Navigate to the home page
    };
    return (
        <section className={classes.detail}>
            <div className={classes.content}>
                <div className={classes.imageContainer}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.textContainer}>
                    <h2 className={classes.placementOfDescription}>Description</h2>
                    <p>This is a description of the first meetup as arranged at the address below!</p>
                    <p className={classes.addplacement}>No 4A,</p>
                    <p className={classes.addplacement}>The Links,</p>
                    <p className={classes.addplacement}>Barna,</p>
                    <p className={classes.addplacement}>Galway H91 NP4A</p>
                    <p className={classes.discrip}>just in case</p>

                </div>
            </div>
            <footer className={classes.footer}>
                <button className={classes.homeButton} onClick={navigateToHomePage} >HOME PAGE</button>
                <h1 className={classes.footerTitle}>Meeting 1</h1>
                <button className={classes.homeButton} onClick={navigateToHomePageReact} >HOME PAGE</button>
            </footer>
        </section>
    );
}

export default MeetupDetail;

//First one
/*
// MeetupDetail.js
import React from 'react'; // Brings in React.
import classes from './MeetupDetail.module.css'; // Brings in styles from CSS file.

function MeetupDetail(props) { // Defines a component called MeetupDetail.
    return ( // Starts the output.
        <section className={classes.detail}> // Creates a section with specific styles.
            <img src={props.image} alt={props.title} /> // Shows an image using data from props.
            <div className={classes.content}> // Starts a box for text with styles.
                <h1>Meeting 1</h1> // Shows a title "Meeting 1."
                <p className={classes.font}>{props.title}</p> // Shows the meetup title in italics.
                <p>{props.description}</p> // Shows the meetup description.
            </div>
        </section>
    ); // Ends the output.
}

export default MeetupDetail; // Makes the component available to use elsewhere.

.detail { // Styles for the section.
    display: flex; // Arranges items in a row.
    align-items: flex-start; // Aligns items to the top.
    text-align: left; // Aligns text to the left.
}

.detail img { // Styles for the image.
    width: 58%; // Makes the image 58% wide.
    margin-right: 20px; // Adds space to the right of the image.
}

.content { // Styles for the text box.
    flex: 1; // Allows the box to fill the space.
    margin-left: 20px; // Adds space to the left of the box.
}

.font { // Styles for italic text.
   font-style: italic; // Makes text italic.
}
}*/
