import React from "react";
import { useDispatch } from "react-redux";

import { toggleTaskCompletionData } from "@Actions/tasksActions";

// Styles
import "@Css/Card.css";

function Card({ info }) {
  const dispatch = useDispatch();

  return (
    <a
      href="#"
      onClick={(event) => {
        event.preventDefault();

        dispatch(toggleTaskCompletionData(info));
      }}
      className={`Card ${info.completed ? "Card--completed" : ""}`}
    >
      <div className="Card__details">
        <span className="Card__title">{info.title}</span>
      </div>
    </a>
  );
}

export default Card;
