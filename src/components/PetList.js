import { response } from 'express';
import React from 'react';
import SinglePet from './SinglePet';

const cody = {
  id: 2,
  name: 'Cody',
  description: 'Adorable pug who loves to hug',
  species: 'dog',
};

// PetList only renders one SinglePet. We'd like it to render a list of pets,
// passed in as props.pets. Don't forget to add a unique key to each one!
class PetList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    pets:this.props.pets

    }

  }
  render() {

    return (
      <>
        <div className="pet-list">
          <div>{this.props.pets.map((pet) => {
            return <SinglePet key={pet.id} pet={pet}/>
          })}
          </div>




        </div>
      </>
    );
  }
}

export default PetList;
