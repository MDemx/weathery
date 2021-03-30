import React from 'react'
import styled from "styled-components"

const ForecastItemInfo = styled.div`
    font-size: 1.1em;
`

const DayDataWrapper = styled.div`
    text-align: right;
`


const DayData = React.memo(({day}) => {
        return <DayDataWrapper>
            <ForecastItemInfo>
                <p>{day}</p>
            </ForecastItemInfo>
        </DayDataWrapper>
    }
)


export default DayData