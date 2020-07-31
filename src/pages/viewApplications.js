import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row' ;
import Card from '../components/cards';
import { Store, get, keys } from 'idb-keyval';

export default () => {
    const applicationStore = new Store('job-manager', 'applications');
    const [applications, setApplications] = useState([])

    useEffect(() => {
        loadApplications();
    },[])

    function loadApplications() {
        keys(applicationStore).then(keys => {
            keys.sort((a, b) => (a.stage > b.stage) ? 1 : -1);
            keys.forEach(key => {
                get(key, applicationStore).then(jobApp => setApplications(applications => [...applications, jobApp]))
            })
        })
    }

    return (
        <Row style={{ margin: '15px 15px' }}>
            {applications.map((application, idx) => (<Card application={application} key={idx} />))}
        </Row>
    )
}