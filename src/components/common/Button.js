import React from 'react';
import { Button } from 'react-bootstrap';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';


const StyledButton = styled.button`
border: none;
border-radius: 4px;
font-size: 1rem;
font-weight: bold;
padding: 0.25rem 1rem;
color: ${palette.gray[5]};
outline: none;
cursor: not-alloewed;

background: ${palette.gray[3]};
&:hover {
    background: ${palette.gray[6]};
}

${props => props.fullWidth && css`
    padding-top: 0.75rem;
    pading-bottom: 0.75rem;
    width: 100%;
    font-size: 1.125rem;
`}

${props => props.cyan && css`
background: ${palette.cyan[5]};
&:hover {
    background: ${palette.cyan[4]};
}
`}
`;

const Button2 = props => <StyledButton{...props} />;

// const Button2 = function(props) {
//     return  <StyledButton{...props} />;
// }

export default Button2;