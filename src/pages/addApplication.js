import React, { useState } from "react";
import { Store, set } from 'idb-keyval';

export default () => {

    const [application, setApplication] = useState({});
    const [jobDescription, setJobDescription] = useState({});

    const today = new Date().toISOString().slice(0, 10);
    const applicationStore = new Store('job-manager', 'applications')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit Form")
        const newApplication = {
            "companyName": application.companyName,
            "jobTitle": application.jobTitle,
            "jobDescription": jobDescription,
            "source": application.source,
            "resume": application.resume,
            "dateApplied": today,
            "stage": "1 - Applied"
        }

        set(application.companyName, newApplication, applicationStore)
            .then(() => window.location.reload(false))
            .catch((err) => console.log('It failed!', err));

    }

    return (
        <div className='form'>
            <form className="form-group form-add" onSubmit={handleSubmit}>
                <label className="form-label">Company Name<br />
                <input id="inputCompanyName"
                    type="text"
                    name="companyName"
                    onChange={e => setApplication({ ...application, 'companyName': e.target.value })}
                    placeholder="Company Name" />
                </label>
                <label className="form-label">Job Title<br />
                <input id="inputJobTitle"
                    type="text"
                    name="jobTitle"
                    onChange={e => setApplication({ ...application, 'jobTitle': e.target.value })}
                    placeholder="Job Title" />
                </label>
                <br />
                <label className="form-label">Link to Job Posting<br />
                <input id="inpurtSource"
                    type="url"
                    name="source"
                    onChange={e => {
                        setApplication({ ...application, 'source': e.target.value });
                        fetch(application.source)
                        .then(response => console.log(response))
                }}
                    placeholder="Link to Source" />
                </label>
                <label className="form-label">Link to Resume Used<br />
                <input id="inputResume"
                    type="url"
                    name="resume"
                    onChange={e => setApplication({ ...application, 'resume': e.target.value })}
                    placeholder="Link to Resume" />
                </label>
                <br />
                <label className="form-label">Job Description Overview<br />
                <textarea id="inputJobDescription-Overview"
                    type="textarea"
                    name="jobDescription-Overview"
                    wrap="soft"
                    onChange={e => setJobDescription({ ...jobDescription, 'overview': e.target.value })}
                    placeholder="Job Description Overview" />
                </label>
                <br />
                <label className="form-label">Job Description Responsibilities<br />
                    <textarea id="inputJobDescription-Responsibilities"
                        type="textarea"
                        name="jobDescription-Responsibilities"
                        wrap="soft"
                        onChange={e => setJobDescription({ ...jobDescription, 'responsibilities': e.target.value })}
                        placeholder="Job Description Responsibilities" />
                </label>
                <br />
                <label className="form-label">Job Description Requirements<br />
                    <textarea id="inputJobDescription-Requirements"
                        type="textarea"
                        name="jobDescription-Requirements"
                        wrap="soft"
                        onChange={e => setJobDescription({ ...jobDescription, 'requirements': e.target.value })}
                        placeholder="Job Description Requirements" />
                </label>
                <br />

                <button type="submit">Submit Application</button>
            </form>
        </div>
    )
}