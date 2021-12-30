import React from 'react';

class SinglePet extends React.Component {
  render() {
    return <div className="single-pet">
      <h1>{this.props.name}</h1>
    </div>;
  }
}

export default SinglePet;
