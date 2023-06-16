import './AnimalList.css'
import PropTypes from 'prop-types';

import Animal from './Animal';

const AnimalList = (props) => { 
    // If the parameter is props instead, you can do these!
    const listOfAnimals = props.listOfAnimals;
    // const { listOfAnimals } = props;

    // const renderedAnimals = [];
    // for (const creature of listOfAnimals) {
    //     renderedAnimals.push(
    //         <li>
    //             <Animal name={creature.name} species={creature.species}></Animal>
    //         </li>
    //     )
    // }

    return (
        <section className="AnimalList">
            <h2>Animal List</h2>
            <ul className="AnimalList_list">
                {
                    // This embedded JSX snippet is reponsible for
                    // 1. Reading the prop named listOfAnimals
                    // 2. Generating an <li> element for each creature in listOfAnimals
                    listOfAnimals.map(creature => (
                        <li key={creature.id}>
                            <Animal 
                            name={creature.name} 
                            species={creature.species}
                            photo={creature.photo}
                            updateBookmark={props.updateBookmark}
                            ></Animal>
                        </li>
                    ))
                }
            </ul>
        </section>
    );
};

AnimalList.propTypes = {
    listOfAnimals: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            id: PropTypes.number.isRequired,
            species: PropTypes.string,
            adopted: PropTypes.bool,
            age: PropTypes.number,
            photo: PropTypes.string,
        })
    ),
    updateBookmark: PropTypes.func
}

export default AnimalList;