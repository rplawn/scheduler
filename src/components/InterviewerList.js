import React from "react";
import InterviewerListItem from "components/InterviewerListItem";
import "components/InterviewerList.scss";

export default function InterviewerList(props) {
  const list = props.interviewers.map(interviewerObj =>
    <InterviewerListItem
      key={interviewerObj.id}
      name={interviewerObj.name}
      avatar={interviewerObj.avatar}
      selected={props.interviewer === interviewerObj.id}
      setInterviewer={() => props.setInterviewer(interviewerObj.id)}
    /> )
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">{list}</h4>
      <ul className="interviewers__list"></ul>
    </section>
  );
}
