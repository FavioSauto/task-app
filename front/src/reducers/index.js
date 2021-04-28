import { combineReducers } from "redux";

// Reducers
import tasksReducer from "@Reducers/tasksReducer";

export default combineReducers({
  tasks: tasksReducer,
});
