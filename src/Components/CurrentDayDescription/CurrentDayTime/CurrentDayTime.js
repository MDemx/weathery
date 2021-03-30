import React from 'react'
import styled from "styled-components"


const Wrapper = styled.div`
    display: flex;
    font-size: 1.8em;
`

const Day = styled.p`
    &:after {
        content: "/";
        padding-left: 5%;
    }
`

export const CurrentDayTime = (props) => {
    return <Wrapper>
        <Day>{props.day}</Day>
        <p>{props.time}</p>
    </Wrapper>
}