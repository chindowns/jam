import React, {useState} from "react";
import Forms from "react-bootstrap/Form"



export default () => {

    const [state, dispatch] = useSessionContext();
    const [setApplication, setApplication] = useState({});
    const [loaded, setloaded] = useState();

    const today = new Date().toISOString().replace(/-/g,"").slice(0,8);
    const iDB = window.indexedDB.open("JobApp", 1);

    iDB.onupgradeneeded = ({ target }) => {
        const db = target.result;
        const applicationsStore = db.createObjectStore("Applications", {keyPath:"Company"});

    }

    const handleSubmit = () => {
        const newApplication  = {
            companyName: getApplication.companyName,
            jobTitle: getApplication.jobTitle,
            jobDescription: getApplication.jobDescription,
            source: getApplication.source,
            resume: getApplication.resume,
            dateApplied: today,
            stage: "1 - Applied",
        }

        applicationsStore.transaction.oncomplete = (e) => {
            const applicationStore = db.transaction("Applications", "readwrite").objectStore("Applications");
            applicationStore.add(newApplication);
        }

    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input id="inputCompanyName" 
                        className="form-input" 
                        type="text" 
                        name="companyName" 
                        onChange={e => addApplication({...setApplication, companyName: e.target.value})} 
                        placeholder="Company Name" />
                    <input id="inputJobTitle" 
                        className="form-input" 
                        type="text" 
                        name="jobTitle"
                        onChange={e => addApplication({...setApplication, jobTitle: e.target.value})} 
                        placeholder="Job Title" />
                    <input id="inputJobDescription" 
                        className="form-input" 
                        type="text" 
                        name="jobDescription" 
                        onChange={e => addApplication({...setApplication, jobDescription: e.target.value})} 
                        placeholder="Job Description" />
                    <input id="inpurtSource" 
                        className="form-input" 
                        type="text" 
                        name="source" 
                        onChange={e => addApplication({...setApplication, source: e.target.value})}
                        placeholder="Link to Source" />
                    <input id="inputResume" 
                        className="form-input" 
                        type="text" 
                        name="resume" 
                        onChnage={e => addApplication({...setApplication, resume: e.target.value})}
                        placeholder="Link to Resume" />
                    <input id="inputJobLocatin" className="form-input" type="text" placeholder="Date Applied" />
                </div>
            </Form>
        </>
    )
}