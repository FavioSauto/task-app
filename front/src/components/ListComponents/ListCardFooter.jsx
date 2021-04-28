import React from "react";
import { useDispatch } from "react-redux";

// Actions
import { showCreateTextAreaInline } from "@Actions/tasksActions.js";

// Styles
import "@Css/ListComponents/ListCardFooter.css";

function ListCardFooter() {
  const dispatch = useDispatch();

  // Event functions
  function handleCreateOnClick(event) {
    event.preventDefault();
    dispatch(showCreateTextAreaInline(true));
  }

  return (
    <div className="CardFooter">
      <a
        href=""
        className="CardFooter__open"
        onClick={function (event) {
          handleCreateOnClick(event);
        }}
      >
        <span>Add another task</span>
      </a>
    </div>
  );
}

export default ListCardFooter;
