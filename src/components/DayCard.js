import React from 'react';
import { Col, Card, CardHeader, CardBody } from 'reactstrap';

const DayCard = props => {
    console.log(props);
    return (
        <Col >
            <Card>
                <CardHeader>
                    {props.day}
                </CardHeader>
                <CardBody>
                    <h3>{props.current.toFixed(1)}°</h3>
                    <p>
                        <img src={`${process.env.PUBLIC_URL}/icons/icons/${props.icon}.png`} alt={props.description} />
                    </p>
                </CardBody>
            </Card>
        </Col>
    )
}

export default DayCard;