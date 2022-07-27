//Return array of appointments for the day
export function getAppointmentsForDay(state, name) {
  const daysFilter = state.days.filter(day => day.name === name)[0];

  let result = [];

  if (!daysFilter) {
    return result;
  }
  
  for (const id of daysFilter.appointments) {
    const apptObj = state.appointments[id];
    result.push(apptObj);
  }
  return result;
};

