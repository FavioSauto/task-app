import React from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { toggleTaskCompletionData } from "@Actions/tasksActions";

// Styles
import "@Css/Card.css";

function Card({ info }) {
  const location = useLocation();
  const dispatch = useDispatch();

  return (
    <Link
      to={{
        pathname: `/tasks/${info.id}`,
        state: { modal: location },
      }}
      onClick={() => {
        // dispatch(toggleTaskCompletionData(info));
      }}
      className={`Card ${info.completed ? "Card--completed" : ""}`}
    >
      <div className="Card__details">
        <span className="Card__title">{info.title}</span>
      </div>
    </Link>
  );
}

export default Card;
