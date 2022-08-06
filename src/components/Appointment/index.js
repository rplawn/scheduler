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
const DELETING = "DELETING";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE"


export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };

    transition(SAVING);

    props
      .bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      .catch(error => transition(ERROR_SAVE, true));

  };

  function handleDelete() {
    transition(DELETING, true);
    props
      .cancelInterview(props.id)
      .then(() => transition(EMPTY))
      .catch(error => transition(ERROR_DELETE, true));
  };

  // function edit() {
  //   transition(EDIT);
  // }

  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}

      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(CONFIRM)}
          onEdit={() => transition(EDIT)}
        />)}

      {mode === CONFIRM && <Confirm
        message="Delete the appointment?"
        onConfirm={handleDelete}
        onCancel={back}
      />}

      {mode === STATUS && <Status
        message="Deleting" />}

      {mode === ERROR && <Error
        message="Could not delete the component"
        onClose={props.onClose} />}

      {mode === CREATE && <Form
        // student={props.interview.student}
        interviewers={props.interviewers}
        onSave={save}
        onCancel={back}
      />}

      {mode === SAVING && <Status
        message="Saving"
      />}

      {mode === DELETING && <Status
        message="Deleting"
      />}

      {mode === EDIT && <Form
        name={props.interview.student}
        value={props.value}
        interviewers={props.interviewers}
        onSave={save}
        onCancel={back}
        interviewer={props.interview.interviewer.id}
      />}

      {mode === ERROR_DELETE && <Error
        message="There was an error cancelling your appointment. Please try again."
        onClose={back}
      />}

      {mode === ERROR_SAVE && <Error
        message="There was an error booking your appointment. Please try again."
        onClose={back}
      />}

    </article>
  );
}
