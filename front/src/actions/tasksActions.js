// Types
import {
  CREATE_NEW_TASK,
  CREATING_NEW_TASK,
  TOGGLE_TASK_COMPLETION,
  UPDATE_TASK,
  GET_ALL_TASKS,
  SHOW_CREATE_TEXTAREA_INLINE,
} from "@Types/tasksTypes";

export const showCreateTextAreaInline = (payload) => {
  return {
    type: SHOW_CREATE_TEXTAREA_INLINE,
    payload,
  };
};

export const createNewTask = (payload) => {
  return {
    type: CREATE_NEW_TASK,
    payload,
  };
};

export const toggleTaskCompletion = (payload) => {
  return {
    type: TOGGLE_TASK_COMPLETION,
    payload,
  };
};

export const updateTask = (payload, field) => {
  return {
    type: UPDATE_TASK,
    field,
    payload,
  };
};

export const creatingNewTask = (payload) => {
  return {
    type: CREATING_NEW_TASK,
    payload,
  };
};

export const getAllTasks = (tasks) => {
  return {
    type: GET_ALL_TASKS,
    payload: tasks,
  };
};

export const updateNewTaskData = (field, payload) => {
  return {
    type: UPDATE_TASK,
    field,
    payload,
  };
};

// Thunks
export const loadTasks = () => async (dispatch) => {
  const { tasks } = await fetch("http://localhost:3000/api/tasks").then((res) =>
    res.json()
  );
  dispatch(getAllTasks(tasks));
};

export const createTask = (task) => async (dispatch) => {
  const { title, completed } = task;
  await fetch("http://localhost:3000/api/tasks", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      title,
      completed,
    }),
  });

  dispatch(createNewTask(task));
};

export const updateTaskData = (taskID, newTask) => async (dispatch) => {
  const { id, title, completed } = newTask;
  await fetch(`http://localhost:3000/api/tasks/${taskID}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      title,
      completed,
    }),
  });

  dispatch(updateTask({ id, title, completed: !completed }));
};

export const toggleTaskCompletionData = (task) => async (dispatch) => {
  const { id, title, completed } = task;
  await fetch(`http://localhost:3000/api/tasks/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      title,
      completed: !completed,
    }),
  });

  dispatch(updateTask({ id, title, completed: !completed }));
};
