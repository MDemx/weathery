import React from 'react'
import logo from '../../assets/logo.png'
import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    margin: 0 auto;
    align-items: center;
    border-bottom: 1px solid lightgrey;
    
    & img {
        width: 40px;
        margin-right: 20px;
    }
    
    & h1 {
        font-size: 1.3em;
    }
`


export const Banner = (props) => {
    return <Wrapper>
        <div>
            <img src={logo} alt="logo"/>
        </div>
        <div>
            <h1>Weathery</h1>
        </div>
    </Wrapper>
}