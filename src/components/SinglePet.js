import React from 'react';

class SinglePet extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      adopted: false,
      pet:this.props.pet

    }
    this.togglebutton = this.togglebutton.bind(this)

  }
  togglebutton() {
    this.setState({ adopted: !this.state.adopted })

  }
  render() {
    return <div className={this.state.adopted ? "single-pet adopted":"single-pet"}>
      <h1>{this.state.pet.name}</h1>
      <h2>{this.state.pet.description}</h2>
      <p>{this.state.pet.species}</p>
      <button onClick={this.togglebutton}>Toggle Status</button>

      <div>
          <h2>{this.state.adopted ? 'Adopted!' : 'Available'}</h2>
        </div>
    </div>;
  }
}

export default SinglePet;
