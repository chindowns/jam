
import React from 'react';
import { Link } from 'react-router-dom'
import { Card, Row, Col, Button } from 'react-bootstrap'
import './card.css'

export default (props) => {

    let application = props.application

    return (
        <Card bg='dark'
            key={props.idx}
            text='white'
            style={{ width:'300px', margin:' 15px 0px 0px 15px' }}
            className=""
        >
            <Card.Header className="d-flex justify-content-between align-center">
                {application.companyName}
                    <Link to={'/edit/' + application.companyName}>
                    <Button variant="info" className="fa fa-pencil-square-o" aria-hidden="true"></Button>
                </Link>
            </Card.Header>
            <Card.Body>
                <Card.Title>{application.jobTitle}</Card.Title>
                <Card.Text style={{fontWeight: '300'}}>
                    {application.jobDescription}
                </Card.Text>
                <Row md={{ span: 4, offset: 4 }}>
                    <Col><a href="{application.source}" className="underline slate-blue" >Job Posting</a></Col>
                    <Col><a href="{application.resume}" className="underline slate-blue" >Resume Link</a></Col>
                </Row>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-around">
                <div>{application.dateApplied}</div>
                <div>{application.stage}</div>
            </Card.Footer>
        </Card>
    )
}