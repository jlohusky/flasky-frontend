import './Animal.css';
import PropTypes from 'prop-types';

// The repsonsibility of this component is to be a reusable UI element that displays an Animal's
// - name
// - species
// - age
// - photo (optional?) -- or a default photo
const Animal = (props) => {

    return (
        <section className="Animal">
            <h3>Animal name: {props.name}</h3>
            <p> Species: {props.species ? props.species : 'Unknown'}</p>
            {props.photo ? <img src={ props.photo } alt="pic of Willow"></img> : "[No Photo]"}
        </section>
    );
};

Animal.propTypes = {
    name: PropTypes.string,
    species: PropTypes.string,
    adopted: PropTypes.bool,
    age: PropTypes.number,
    photo: PropTypes.string
};

export default Animal;