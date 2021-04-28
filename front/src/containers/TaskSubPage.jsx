import React from "react";

// Router imports
import { useHistory, useParams } from "react-router-dom";

// Styles
import "@Css/TaskSubPage.css";

function TaskSubPage() {
  const history = useHistory();
  const { id } = useParams();

  const goBack = (event) => {
    event.stopPropagation();
    history.goBack();
  };

  return (
    <div role="button" className="TaskSubpageWrapper" onClick={goBack}>
      <div className="TaskSubpage">
        <h2>H</h2>
      </div>
    </div>
  );
}

export default TaskSubPage;
