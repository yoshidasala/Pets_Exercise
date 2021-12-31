import React from 'react';
import PetList from './PetList';
import axios from 'axios';
// We'll render these sample pets for now. Later, we'll instead fetch the list
// of pets from the server! We won't need samplePets after that.
import samplePets from '../petdata';

class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      pets: [],
      error: ""
    };
  }

  async componentDidMount() {
    try {

      const { data } = await axios.get('/api/pets');

      this.setState({
        pets: data,
        loading: false,
      });
    } catch (error) {
      this.setState({
        error: error.message,
        loading: false,
      });
    }
  }
  render() {
    return (

     <div> <h1>Adoption Center</h1>
 {this.state.error && <div>Error</div>}
        {this.state.loading && <div>Loading...</div>}
             <div><PetList pets={this.state.pets}/></div>
     </div>

    );
  }
}

export default Root;
