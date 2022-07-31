import React, { useState } from 'react';
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

export default function Form(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  //Function to clear fields
  const reset = () => {
    setStudent("")
    setInterviewer("")
  }

  function cancel() {
    reset();
    props.onCancel()
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off"
        onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name={props.name}
            type="text"
            value={student}
            onChange={(event) => setStudent(event.target.value)}
            placeholder="Enter Student Name"
          /*
            This must be a controlled component
            your code goes here
          */
          />
        </form>
        <InterviewerList
        interviewers={props.interviewers}
        value={interviewer}
        onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={() => props.onSave(student, interviewer)}>Save</Button>
        </section>
      </section>
    </main>
  );
}
