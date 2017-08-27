import styled from 'styled-components'

export const Button = styled.button`
  /* Adapt the colours based on primary prop */
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const TomatoButton = Button.extend`
	color: tomato;
	border-color: tomato;
`;

export const ExistedButton = styled.button.attrs({
	className: 'blue',
})`
	background: black;
	color: white;
	cursor: pointer;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid black;
	border-radius: 3px;
`;
