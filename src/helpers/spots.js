//Function to calculate appointment spots left per day
export default function spotsRemaining(day, days, appointments) {
  const newDays = days.map(d => {
    if (d.name === day) {
     
      const spots = d.appointments.filter(appointment => {
        if (appointments[appointment].interview) {
          return false;
        }
        return true;
      }).length
   
      d.spots = spots;
    }
    return d;
  })
  return newDays
};