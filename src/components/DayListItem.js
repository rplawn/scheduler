import React from "react";
import "components/DayListItem.scss";
import classNames from "classnames";

const formatSpots = spots => {
  if (!spots) {
    return `no spots remaining`;
  }
  if (spots === 1) {
    return `1 spot remaining`;
  }
  return `${spots} spots remaining`;
}

export default function DayListItem(props) {

  const message = formatSpots(props.spots);
  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": !props.spots
  });

  return (
    <li className={dayClass} 
    onClick={() => props.setDay(props.name)}>
    <h2 className="text--regular">{props.name}</h2>
    <h3 className="text--light">{message}</h3>
  </li>
  );
}