import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Store, get, keys } from 'idb-keyval';

export default () => {
    let keysArr = [];
    let applicationsArr = [];
    const applicationStore = new Store('job-manager', 'applications')
    keys(applicationStore) // telling the method keys to get the data from applicationStore
        .then(keys => {
            keysArr = keys;
            console.log(keysArr);
        })
        .then(() => {
            keysArr.forEach(key => {
                get(key, applicationStore)
                    .then(val => {
                        applicationsArr.push(val);
                        console.log(applicationsArr)
                    })
            })

        })
        .catch(e => console.log("Failed", e));

    return (
        <>
        {applicationsArr.map((application, idx) => (
            <Card
                bg={'dark'}
                key={idx}
                text={'white'}
                style={{ width: '200px' }}
                className="mb-2"
            >
                <Card.Header>
                    {application.companyName}
                </Card.Header>
                <Card.Body>
                    <Card.Title>{application.jobTitle}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                        </Card.Text>
                    <Row>
                        <Col>{application.source}</Col>
                        <Col>{application.resume}</Col>
                    </Row>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-around">
                    {application.dateApplied}
                    <div className="fa fa-pencil-square-o" aria-hidden="true"></div>
                </Card.Footer>
            </Card>
            
        )
        )}
        </>
    )
}