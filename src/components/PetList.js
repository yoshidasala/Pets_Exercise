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
    super(props);
    this.state = {
      pets: this.props.pets,
      category:"all"
    };
    this.category = this.category.bind(this)

  }


  category(event) {
    this.setState({category: event.target.value})


  }
  render() {
    let pets = this.props.pets
    if (this.state.category === "dogs") {
      pets = this.props.pets.filter((curr) => {
        return curr.species === "dog"
      })
    } else if (this.state.category === "cats") {
      pets = this.props.pets.filter((curr) => {
        return curr.species === "cat"
      })
    }


    return (
      <>
        <div className="pet-list">
          <div>
            {pets.map((pet) => {
              return <SinglePet key={pet.id} pet={pet} />;
            })}
          </div>

          <select onChange={this.category} id="category">
          <option value="all">all</option>
            <option value="cats">cats</option>
            <option value="dogs">dogs</option>

          </select>
        </div>
      </>
    );
  }
}

export default PetList;
