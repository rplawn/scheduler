import React from "react";
import DayListItem from "components/DayListItem";

export default function DayList(props) {
  const week = props.days.map(weekObj => 
    <DayListItem
        key={weekObj.id}
        name={weekObj.name}
        spots={weekObj.spots}
        selected={weekObj.name === props.day}
        setDay={props.setDay}
      /> )
  return (
    <ul>
      {week}
    </ul>
  );
}

