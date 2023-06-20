import './Animal.css';
import PropTypes from 'prop-types';

const Animal = (props) => {

    const altText = `Photo of ${props.name}`

    const toggleBookmark = () => {
        console.log(props.isBookmarked);
        props.updateBookmark(props.id);
    }

    const toggleDelete = () => {
        props.updateDelete(props.id);
    }

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