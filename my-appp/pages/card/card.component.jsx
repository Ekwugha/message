import React from 'react';
import { Col, Card } from 'react-bootstrap';
import Icon from '../icon/icon.component';
import './card.styles.css';

const CardBody = ( {title, body, id, icon, footer1, footer2, footer3, footer4, footer5, footer6} ) => {
    return (
        <Col data-aos='zoom-in' md={6} xl={6} className="my-4">
            <Card className="d-card">
                <Card.Body className="m-3 mx-auto">
                    <Icon> {icon} </Icon>
                    <Card.Title className="my-4 text-capitalize text-center"> { title } </Card.Title>
                    <Card.Text className="text-muted"> { body } </Card.Text>
                   <span className='footer1 mx-1' id="card-footer"> {footer1} </span>
                   <span className='footer2 mx-1' id="card-footer"> {footer2} </span>
                   <span  className='footer3 mx-1' id="card-footer"> {footer3} </span>
                   <span  className='footer4 mx-1' id="card-footer"> {footer4} </span>
                   <span  className='footer5 mx-1' id="card-footer"> {footer5} </span>
                   <span  className='footer6 mx-1' id="card-footer"> {footer6} </span>
                   <span  className='footer6 mx-1' id="card-footer"> {footer7} </span>

                </Card.Body>
            </Card>
        </Col> 
    );
}

export default CardBody