import React from "react";

// Styles
import "@Css/ListComponents/ListHeader.css";

function ListHeader() {
  function handleTextAreaOnChange() {}

  return (
    <div className="ListHeader">
      <div className="ListHeader__target"></div>
      <textarea
        className="ListHeader__name"
        value="Project Name"
        onChange={function () {
          handleTextAreaOnChange();
        }}
      ></textarea>
    </div>
  );
}

export default ListHeader;
