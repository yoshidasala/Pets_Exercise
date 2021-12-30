import React from 'react';

class SinglePet extends React.Component {
  constructor() {
    super()
    this.state = {
      adopted: true

    }
    this.togglebutton = this.togglebutton.bind(this)

  }
  togglebutton() {
    this.setState({adopted :!this.state.adopted})
  }
  render() {
    return <div className="single-pet">
      <h1>{this.props.pet.name}</h1>
      <h2>{this.props.pet.description}</h2>
      <p>{this.props.pet.species}</p>
      <button onClick={this.togglebutton}>Toggle Status</button>
      {this.state.adopted ? <h2>Available</h2> : <h2>Adopted!</h2>}
    </div>;
  }
}

export default SinglePet;
