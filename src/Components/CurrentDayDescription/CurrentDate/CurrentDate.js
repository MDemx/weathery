import React from 'react'
import styled from "styled-components"


const Date = styled.p`
    margin-top: -3%;
    font-size: 1.4em;
    
    @media screen and (max-width: 800px) {
        margin-top: 1%;
    }
`


export const CurrentDate = (props) => {
    return <div>
        <Date>{props.date}</Date>
    </div>
}