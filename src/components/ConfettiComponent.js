import React, { Component } from 'react';
import Confetti from 'react-confetti';

class ConfettiComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { x, y } = this.props;

    return (
      <Confetti
        width={x}
        height={y} />
    )
  }
}

export default ConfettiComponent;
