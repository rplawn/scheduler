import React from "react";
import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import Confirm from "components/Appointment/Confirm";
import Status from "components/Appointment/Status";
import Error from "components/Appointment/Error";
import Form from "components/Appointment/Form";
import useVisualMode from "hooks/useVisualMode";


const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CONFIRM = "CONFIRM";
const STATUS = "STATUS";
const ERROR = "ERROR";
const CREATE = "CREATE";
const SAVING = "SAVING";

// const FORM = ;
// const EDIT = ;


export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    // transition(SAVING);

    props.bookInterview(props.id, interview).then(() => {
      transition(SHOW);

    }
    );

  }

  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}

      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer} />)}

      {mode === CONFIRM && <Confirm
        message="Delete the appointment?"
        onConfirm={props.onConfirm}
        onCancel={props.onCancel} />}

      {mode === STATUS && <Status
        message="Deleting" />}

      {mode === ERROR && <Error
        message="Could not delete the component"
        onClose={props.onClose} />}

      {mode === CREATE && <Form
        name={props.name}
        // interviewer={""}
        interviewers={props.interviewers}
        onSave={save}
        onCancel={back}
      // bookInterview={props.bookInterview}
      // student={""}
      // interviewer={props.interviewer}
      />}

      {/* {mode === SAVING && </>} */}

    </article>
  );
}
