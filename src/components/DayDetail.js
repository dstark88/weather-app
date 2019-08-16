import React from 'react';
import { Card, CardBody } from 'reactstrap';
import styled from 'styled-components';

const StyledCard = styled(Card)`
    border: 3px solid grey;
    margin-top: 1em;
    text-align: center;
    h2 {
        color: blue;
    }
`

const DayDetail = props => {
    return (
        <StyledCard>
            <CardBody>
                <h2>Day Detail for {props.day}</h2>
                <h3>{props.current.toFixed(1)}°</h3>
                        <p>
                            <img src={`${process.env.PUBLIC_URL}/icons/icons/${props.icon}.png`} alt={props.description} />
                        </p>
                        <p><strong>High:</strong> {props.high.toFixed(1)}°</p>
                        <p><strong>Low:</strong> {props.low.toFixed(1)}°</p>
                        <p><strong>Precip:</strong> {props.precip}%</p>
            </CardBody>
        </StyledCard>
    )
}

export default DayDetail;