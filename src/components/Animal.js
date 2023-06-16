import './Animal.css';
import PropTypes from 'prop-types';

import { useState } from 'react';

// [X] Make the element that the user interacts with
// Make the event handler for that element
// Configure a piece of state:
    // Decide what the state is... what is its name, what is its type, what are the available values for this
        // isBookmarked ... true or false
        // likesCount ... numbers 0+
        // biography ... {birthYear:, works:}
    // import useState
    // Render the piece of state with an initial value
        // setIsBookMarked
    // Make the event handler update the state
// Test it
// Style it/add polish

// The repsonsibility of this component is to be a reusable UI element that displays an Animal's
// - name
// - species
// - age
// - photo (optional?) -- or a default photo
const Animal = (props) => {

    // const [isBookmarked, setIsBookmarked] = useState(props.isBookmarked);

    const altText = `Photo of ${props.name}`

    // Responsibility: 
    // Event Handler
    // Update the state
    const toggleBookmark = () => {
        // We want event handler function to do two things:
            // update component's internal state
            // update that information to SSOT
        // setIsBookmarked(!isBookmarked);
        console.log(props.isBookmarked);
        props.updateBookmark(props.id);
    }

    const toggleDelete = () => {
        props.updateDelete(props.id);
    }

    // If the animal is bookmarked, the CSS class name should be
    // .bookmarked
    // If the animal is not bookmarked, there should be no CSS class
    let animalStyle = 'Animal';
    if (props.isBookmarked) {
        animalStyle = 'Animal bookmarked';
    }

    return (
        <section className={animalStyle}>
            <h3>Animal name: {props.name}</h3>
            <p> Species: {props.species ? props.species : 'Unknown'}</p>
            { props.photo ? <img src={ props.photo } alt={altText}></img> : "[No Photo]" }
            <br></br>
            <button onClick={toggleBookmark}>Bookmark</button>
            <p>Is bookmarked? {props.isBookmarked ? "True" : "False"}</p>
            <button onClick={toggleDelete} className="delete-button">🐶 Delete</button>
        </section>
    );
};

Animal.propTypes = {
    name: PropTypes.string,
    species: PropTypes.string,
    adopted: PropTypes.bool,
    age: PropTypes.number,
    photo: PropTypes.string,
    isBookmarked: PropTypes.bool,
    updateBookmark: PropTypes.func,
    updateDelete: PropTypes.func
};

export default Animal;