import React from "react";
import { useSelector, useDispatch } from "react-redux";

// Actions
import { loadTasks } from "@Actions/tasksActions";

// Components
import ListHeader from "@Components/ListComponents/ListHeader";
import ListCards from "@Components/ListComponents/ListCards";
import ListCardFooter from "@Components/ListComponents/ListCardFooter";

// Styles
import "@Css/ListComponents/List.css";

function List() {
  const dispatch = useDispatch();
  const allTasks = useSelector(({ tasks }) => tasks.allTasks);

  React.useEffect(() => {
    dispatch(loadTasks());
  }, []);

  return (
    <div className="ListWrapper">
      <div className="List">
        <ListHeader />
        <ListCards />
        <ListCardFooter />
      </div>
    </div>
  );
}

export default List;
