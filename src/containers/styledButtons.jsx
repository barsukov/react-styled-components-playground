import React, { Component } from 'react';

import { ThemeProvider } from 'styled-components';
import { Button, TomatoButton, ExistedButton , ThemedButton } from '../components/Button'
import { firstTheme, secondTheme } from '../simpleTheme'
class StyledButtons extends Component {
  render() {
    return (
      <div>
        
        <Button primary>Normal Button without themes</Button>
        
        <ThemeProvider theme={firstTheme}> 
          <ThemedButton>First Theme Button</ThemedButton>
        </ThemeProvider>

        <ThemeProvider theme={secondTheme}> 
          <ThemedButton>Second Theme Button</ThemedButton>
        </ThemeProvider>
        
        <button className="blue"> Blue Button </button>
        <ExistedButton> Blue to black </ExistedButton>
        <TomatoButton>Primary</TomatoButton>
      </div>
    );
  }
}

export default StyledButtons;
