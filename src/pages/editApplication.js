import React, { useState, useEffect } from "react";
import { Store, del, set } from 'idb-keyval';
import { useHistory } from 'react-router-dom';
import Note from '../components/notes'

export default (props) => {

    const [application, setApplication] = useState({});
    const [jobDescription, setJobDescription] = useState({});
    const [contactNote, setContactNote] = useState({});
    const [editJobDescription, setEditJobDescription] = useState(false)
    // const [notes, setNotes] = useState([]);

    const today = new Date().toISOString().slice(0, 10);

    const applicationStore = new Store('job-manager', 'applications')
    const history = useHistory();
    let tempApp = {};
    let tempJobDescription = {};
    let tempNotes = [];

    // Setting State for application, jobDescription & 
    props.location.data.application ? tempApp = props.location.data.application : tempApp = {};
    props.location.data.application.jobDescription ? tempJobDescription = props.location.data.application.jobDescription : tempJobDescription = {};

    // Setting tempNotes to props so contactNote can be added with push.
    props.location.data.application.notes ? tempNotes = props.location.data.application.notes : tempNotes = [];

    useEffect(() => {
        setApplication(tempApp);
        setJobDescription(tempJobDescription);
    }, [tempApp.length])

    const handleSubmit = (e) => {
        e.preventDefault()

        // don't push an empty note
        if (contactNote.hasOwnProperty('note')) {
            tempNotes.push(contactNote)
        };

        console.log(tempNotes);
        const updateApplication = {
            "companyName": application.companyName,
            "jobTitle": application.jobTitle,
            "jobDescription": jobDescription,
            "source": application.source,
            "resume": application.resume,
            "dateApplied": application.dateApplied,
            "stage": application.stage,
            "notes": tempNotes
        }

        del(application.companyName, applicationStore)
            .then(() => {
                set(application.companyName, updateApplication, applicationStore)
                    .then(() => history.replace('/view'))
                    .catch((err) => console.log('It failed!', err));
            })
            .catch((err) => console.log('Failed to delete', err));

    }

    return (
        <div className='form'>
            <form className="form-group" onSubmit={handleSubmit}>
                <label className="form-label">Company Name<br />
                    <input id="editCompanyName"
                        readOnly="readOnly"
                        type="text"
                        name="companyName"
                        value={tempApp.companyName} />
                </label>
                <label className="form-label">Job Title<br />
                    <input id="editJobTitle"
                        type="text"
                        name="jobTitle"
                        defaultValue={tempApp.jobTitle}
                        onChange={e => setApplication({ ...application, 'jobTitle': e.target.value ? e.target.value : tempApp.jobTitle })} />
                </label>
                <br />
                <label className="form-label">Link to Job Posting<br />
                    <input id="edittSource"
                        type="url"
                        name="source"
                        defaultValue={tempApp.source}
                        onChange={e => setApplication({ ...application, 'source': e.target.value ? e.target.value : tempApp.source })} />
                </label>
                <label className="form-label">Link to Resume Used<br />
                    <input id="editResume"
                        type="url"
                        name="resume"
                        defaultValue={tempApp.resume}
                        onChange={e => setApplication({ ...application, 'resume': e.target.value ? e.target.value : tempApp.resume })} />
                </label>
                <br />
                <label className="form-label">Stage<br />
                    <input id="editStage"
                        type="select"
                        name="stage"
                        list="stages"
                        defaultValue={tempApp.stage}
                        onChange={e => setApplication({ ...application, 'stage': e.target.value ? e.target.value : tempApp.stage })} />
                    <datalist id="stages">
                        <option value="0 - Declined" />
                        <option value="1 - Applied" />
                        <option value="2 - Recruiter" />
                        <option value="3 - Interview" />
                        <option value="4 - Hired" />
                    </datalist>
                </label>
                <br />
                {editJobDescription ?
                    (<><label className="form-label">Job Description Overview<br />
                        <textarea id="editJobDescription-Overview"
                            type="textarea"
                            name="jobDescription-Overview"
                            wrap="soft"
                            defaultValue={tempApp.jobDescription.overview}
                            onChange={e => setJobDescription({ ...jobDescription, 'overview': e.target.value ? e.target.value : tempApp.jobDescription.overview })} />
                    </label>
                        <br />
                        <label className="form-label">Job Description Responsibilities<br />
                            <textarea id="editJobDescription-Responsibilities"
                                type="textarea"
                                name="jobDescription-Responsibilities"
                                wrap="soft"
                                defaultValue={tempApp.jobDescription.responsibilities}
                                onChange={e => setJobDescription({ ...jobDescription, 'responsibilities': e.target.value ? e.target.value : tempApp.jobDescription.responsibilities })} />
                        </label>
                        <br />
                        <label className="form-label">Job Description Requirements<br />
                            <textarea id="editJobDescription-Requirements"
                                type="textarea"
                                name="jobDescription-Requirements"
                                wrap="soft"
                                defaultValue={tempApp.jobDescription.requirements}
                                onChange={e => setJobDescription({ ...jobDescription, 'requirements': e.target.value ? e.target.value : tempApp.jobDescription.requirements })} />
                        </label>
                    </>)
                    :
                    <label className="form-label">Job Description<br />
                        <div className="radius text-left">
                            <div className="fa fa-pencil-square-o text-right" style={{ position: "relative", float: "right", padding: "1px 3px 1px 7px" }} onClick={e => setEditJobDescription(true)}>
                            </div>
                            {tempJobDescription.overview}
                            <br />
                            {tempJobDescription.responsibilities}
                            <br />
                            {tempJobDescription.requirements}

                        </div>
                    </label>
                }
                {tempNotes ?
                    <label className="form-label">Notes
                        <div className="radius">
                            {tempNotes.map((note, idx) => (<Note note={note} key={idx} />))}
                        </div>
                    </label>
                    : null}
                <br />
                <label className="form-label">Add Contact<br />
                    <input id="addContact"
                        type="text"
                        name="contact"
                        onChange={e => setContactNote({ ...contactNote, 'date': today, 'contact': e.target.value })} />
                </label><br />
                <label className="form-label">Add Note<br />
                    <textarea id="addNote"
                        type="textarea"
                        name="note"
                        onChange={e => setContactNote({ ...contactNote, 'note': e.target.value })} />
                </label><br />
                <button type="submit">Submit Application</button>
            </form>
        </div>
    )
}