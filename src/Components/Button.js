import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const ButtonStyle = styled.div`
margin-top: 2rem;
.button {
    font-size: 2.2rem;
    background-color: #858585;
    border-radius: 8px;
    display: inline-block;
    color: #000
}
@media only screen and max-width (max-width: 768px){
    .button {
        font-size:1.8rem;
    }
}
`;

export default function Button({ btnLink, btnText }) {
    return (
        <ButtonStyle>
            <Link className="button" to={btnLink}>{btnText}</Link>
        </ButtonStyle>
    )
}
