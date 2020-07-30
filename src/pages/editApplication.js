import React, { useState } from "react";
// import { Store, del, set } from 'idb-keyval';
// import {useHistory} from 'react-router-dom';
 
export default (props) => {

    // const [application, setApplication] = useState({});
    // const applicationStore = new Store('job-manager', 'applications')
    // const history = useHistory();

    // setApplication(props)
    console.log(props)
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const updateApplication = {
    //         "companyName": application.companyName,
    //         "jobTitle": application.jobTitle,
    //         "jobDescription": application.jobDescription,
    //         "source": application.source,
    //         "resume": application.resume,
    //         "dateApplied": application.dateApplied,
    //         "stage": application.stage
    //     }

    //     del(application.companyName, applicationStore)

    //     set(application.companyName, updateApplication, applicationStore)
    //         .then(() => history.replace('/view'))
    //         .catch((err) => console.log('It failed!', err));
    // }

    return (
        <>
            <form className="form-group" >
                <input id="inputCompanyName"
                    type="text"
                    name="companyName"
                />
                <input id="inputJobTitle"
                    type="text"
                    name="jobTitle"
                />
                <br />
                <input id="inpurtSource"
                    type="url"
                    name="source"
                />
                <input id="inputResume"
                    type="url"
                    name="resume"
                />
                <input id="inputdateApplied"
                    type="text"
                    name="dateApplied"
                />
                {/* <input id="inputStage"
                    type="text"
                    name="stage"
                    list="stages"
                    defaultValue=""
                    onChange={e => setApplication({ ...application, 'stage': e.target.value })} />
                    <datalist id="stages">
                        <option value="0 - Declined" />
                        <option value="1 - Applied" />
                        <option value="2 - Recruiter" />
                        <option value="3 - Interview" />
                        <option value="4 - Hired" />
                    </datalist> */}

                <br />
                <input id="inputJobDescription"
                    type="text"
                    name="jobDescription"
                />
                <button type="submit">Submit Application</button>
            </form>
        </>
    )
}