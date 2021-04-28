// Types import
import {
  CREATE_NEW_TASK,
  TOGGLE_TASK_COMPLETION,
  UPDATE_TASK,
  GET_ALL_TASKS,
  SHOW_CREATE_TEXTAREA_INLINE,
} from "@Types/tasksTypes";
import { CREATING_NEW_TASK } from "../utils/types/tasksTypes";

const initialTaskState = {
  allTasks: [],
  showCreationTextAreaInline: false,
  createTaskFormData: {
    id: 0,
    title: "",
    completed: false,
  },
};

const tasksReducer = (
  state = initialTaskState,
  { type, payload, field = null }
) => {
  const newTasks = [...state.allTasks];
  const newCreateTaskFormData = { ...state.createTaskFormData };

  switch (type) {
    case GET_ALL_TASKS:
      return {
        ...state,
        allTasks: payload,
      };
    case SHOW_CREATE_TEXTAREA_INLINE:
      return {
        ...state,
        showCreationTextAreaInline: payload,
      };
    case TOGGLE_TASK_COMPLETION:
      const taskToToggleIndex = state.allTasks.findIndex(
        (task) => task.id === payload.id
      );

      let taskToComplete = state.allTasks[taskToToggleIndex];
      taskToComplete.completed = !taskToComplete.completed;

      newTasks[taskToToggleIndex] = taskToComplete;

      return {
        ...state,
        allTasks: newTasks,
      };
    case UPDATE_TASK:
      const taskToUpdateIndex = state.allTasks.findIndex(
        (task) => task.id === payload.id
      );
      let updatedTask = state.allTasks[taskToUpdateIndex];

      updatedTask.completed = !updatedTask.completed;
      newTasks[taskToUpdateIndex] = updatedTask;

      return {
        ...state,
        allTasks: newTasks,
      };
    case CREATING_NEW_TASK:
      newCreateTaskFormData.title = payload;

      return {
        ...state,
        createTaskFormData: newCreateTaskFormData,
      };
    case CREATE_NEW_TASK:
      const nextID = parseInt(state.allTasks[state.allTasks.length - 1].id) + 1;

      const newAllTasks = [
        ...state.allTasks,
        {
          ...payload,
          id: nextID,
        },
      ];

      console.log(newAllTasks);
      return {
        ...state,
        allTasks: newAllTasks,
        showCreationTextAreaInline: false,
        createTaskFormData: { title: "", completed: false },
      };
    default:
      return state;
  }
};

export default tasksReducer;
