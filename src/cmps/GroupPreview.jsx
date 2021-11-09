import { TaskList } from "./TaskList";
import { useSelector,useDispatch } from "react-redux";
import { removeGroup } from "../store/actions/board.actions";
export const GroupPreview = ({ group }) => {
  
  const dispatch = useDispatch()
  const board = useSelector(state => state.boardModule.board)
  const loggedUser = useSelector(state => state.userModule.loggedUser)

  const onRemove = () => {
    if (loggedUser)
      dispatch(removeGroup(board._id,group.id))
    else
      alert('Log in first!')
  }

  return (
    <section className="group-preview flex column gap">
      <div className="group-header flex space-between">
        <span>{group.title}</span>

        <button onClick={onRemove}>x</button>
      </div>

      {group.tasks.length && <TaskList tasks={group.tasks} />}

      <div className="group-footer flex space-between">
        <div className="add flex">
          <button>+</button>
          <input placeholder="Add a task" type="text" />
        </div>

        <div className="av flex center-center">
          <small>A</small>
          <small>V</small>
        </div>
      </div>
    </section>
  );
};
