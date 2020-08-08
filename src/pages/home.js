import React from 'react';
import { useHistory } from 'react-router-dom';
import { Store, keys } from 'idb-keyval';

export default () => {
    const applicationStore = new Store('job-manager', 'applications');
    const history = useHistory();

    // if applications exist show View Applications
    keys(applicationStore).then(keys => {
       if (keys.length > 0)  {history.replace('/view')} ;
    })

    return (
        <div id="jumbo" className="radius">
            <h1 className="text-shadow slate-blue">Job Application Manager</h1>
            <p>
                This application is simple and fast tool that helps you keep track of the Job Applications where you applied and enables you to keep notes when you have any interaction during the application process.
            </p>
            <p>
                CLICK on "Add Application" to get started
            </p>
            <p>
                This app uses your browsers internal DB to store application info.  <br />
                If you require access to Job Application Manager from multible devices and browsers. <br />
                Job-Kit app has a database and supports access from multiple devices. <br />
                Use <a href="https://job-kit.herokuapp.com" target="_blank">https://job-kit.herokuapp.com</a>
            </p>
        </div>
    )

}