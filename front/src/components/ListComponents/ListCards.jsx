import React from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import Card from "@Components/Card";

// Actions
import {
  createTask,
  creatingNewTask,
  updateTask,
  showCreateTextAreaInline,
} from "@Actions/tasksActions";

// Styles
import "@Css/ListComponents/ListCards.css";

function ListCards() {
  // Actions
  const dispatch = useDispatch();

  // States
  const tasks = useSelector(({ tasks }) => tasks.allTasks);
  const newTask = useSelector(({ tasks }) => tasks.createTaskFormData);
  const showCreationTextAreaInline = useSelector(
    ({ tasks }) => tasks.showCreationTextAreaInline
  );

  // Events functions
  //    On Submit
  function handleCancel(event) {
    event.preventDefault();
    dispatch(showCreateTextAreaInline(false));
  }

  function handleCreateTask(event) {
    event.preventDefault();

    dispatch(createTask(newTask));
  }

  //    On Change
  function handleNewCardTitleChange(event) {
    // const field = event.target.name;
    const newValue = event.target.value;

    dispatch(creatingNewTask(newValue));
  }

  return (
    <div className="ListCards">
      {tasks.length > 0 ? (
        tasks.map(({ id, title, completed }) => (
          <Card
            key={id}
            info={{
              id,
              title,
              completed,
            }}
          />
        ))
      ) : (
        <div>
          <p>Loading...</p>
        </div>
      )}

      <div
        className={`ListCards__createTaskWrapper ${
          showCreationTextAreaInline ? "" : "ListCards__createTaskWrapper--hide"
        }`}
      >
        <div className="ListCard">
          <div className="ListCard__details">
            <textarea
              className="ListCard__details--textarea"
              placeholder="Enter a title for this card"
              name="title"
              value={newTask.title}
              onChange={function (event) {
                handleNewCardTitleChange(event);
              }}
            >
              {newTask ? newTask.title : ""}
            </textarea>
          </div>
        </div>
        <div className="CreatorControls">
          <div className="CreatorControls__section">
            <input
              className="CreatorControls__button"
              name="NewCard"
              type="submit"
              value="Add card"
              onClick={function (event) {
                if (newTask.title) {
                  handleCreateTask(event);
                }
              }}
            />
            <a
              className="CreatorControls__cancel"
              href="#"
              onClick={function (event) {
                handleCancel(event);
              }}
            >
              Cancel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListCards;
