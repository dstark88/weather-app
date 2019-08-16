import React from 'react';
import { Col, Card, CardHeader, CardBody } from 'reactstrap';
import styled from 'styled-components';

const CardWrapper = styled.div`
    h3 {
        font-weight: 900;
    }
    img {
        width: 75px;
    }
    .card {
        border: ${props => props.isActive ? "2px solid blue" : "2px solid grey"};
        cursor: pointer;
        text-align: center;
    }
    .card-header {
        background: ${props => props.isActive ? "blue" : null};
        color: ${props => props.isActive ? "white" : null};
    }
    :hover {
        .card {
            border: 2px solid blue;
        }
        
    }
`

const DayCard = props => {
    // console.log(props);
    return (
        <Col >
            <CardWrapper onClick={props.selectDay} isActive={props.isActive}>
                <Card>
                    <CardHeader>
                        {props.day}
                    </CardHeader>
                    <CardBody>
                        <h3>{props.current.toFixed(1)}°</h3>
                        <p>
                            <img src={`${process.env.PUBLIC_URL}/icons/icons/${props.icon}.png`} alt={props.description} />
                        </p>
                        <p><strong>High:</strong> {props.high.toFixed(1)}°</p>
                        <p><strong>Low:</strong> {props.low.toFixed(1)}°</p>
                        <p><strong>Precip:</strong> {props.precip}%</p>
                    </CardBody>
                </Card>
            </CardWrapper>
        </Col>
    )
}

export default DayCard;