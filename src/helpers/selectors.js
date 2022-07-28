//Return array of appointments for the day
export function getAppointmentsForDay(state, name) {
  const selectedDay = state.days.find(day => day.name === name);

  let appointmentsForDay = [];

  if (!selectedDay) {
    return appointmentsForDay;
  }

  for (const apptId of selectedDay.appointments) {
    const apptObj = state.appointments[apptId];
    appointmentsForDay.push(apptObj);
  }

  return appointmentsForDay;
};

//Select all data for interviewers per day
export function getInterviewersForDay(state, name) {
  const selectedDay = state.days.find(day => day.name === name);

  let interviewersForDay = [];

  if (!selectedDay) {
    return interviewersForDay;
  }

  for (const intId of selectedDay.interviewers) {
    const intObj = state.interviewers[intId];
    interviewersForDay.push(intObj);
  }

  return interviewersForDay;
};


// Return interview data
export function getInterview(state, interview) {
 
  if (!interview) {
    return null;
  }

  const intId = interview.interviewer;
  const intObj = {
    student: interview.student,
    interviewer: state.interviewers[intId]
  };
  
  return intObj;
};
