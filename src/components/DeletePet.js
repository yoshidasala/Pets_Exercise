import React from 'react';
import axios from 'axios';

// const DeletePet = (props) => null;
class DeletePet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleClick = this.handleClick.bind(this)
    
  }


  async handleClick() {
    try {
      await axios.delete(`/api/pets/${this.props.petId}`);
      await this.props.handleDelete()
    } catch (error) {
      console.log(error.message)
    }
  }

  render() {
    return (
      <div>
        <button className="delete-pet" onClick={this.handleClick}>
          Delete
        </button>
      </div>
    );
  }
}

export default DeletePet;
