import React, { Component } from 'react';
import { Button, TomatoButton, ExistedButton , CustomLink } from '../components/Button'

class StyledButtons extends Component {
  render() {
    return (
      <div>
        <Button primary>Normal Button</Button>
        <button className="blue"> Blue Button </button>
        <ExistedButton> Blue to black </ExistedButton>
        <TomatoButton>Primary</TomatoButton>
      </div>
    );
  }
}

export default StyledButtons;
