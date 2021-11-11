import { TaskDetails } from "./TaskDetails";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import DragIndicator from "@mui/icons-material/DragIndicator";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { renameTask } from "../store/actions/board.actions";
export const TaskPreview = ({ task, provided,groupId }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [taskTitle, setTitle] = useState(task?.title);
   const dispatch = useDispatch()
  const board = useSelector(state => state.boardModule.board)
  const openDialog = () => {
    setIsOpen(true);
  };

  const handleBlur = () => {
    dispatch(renameTask(board._id,groupId,task.id,taskTitle))
  }

  const handleChange = (ev) => {
    setTitle(ev.target.value)
  }

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <>
      <section
        {...provided.draggableProps}
        ref={provided.innerRef}
        className="task-preview flex space-between"
      >
        <div>
          <input
          onBlur={handleBlur}
          onChange={handleChange}
            style={{
              width: `${taskTitle.length + 1}ch`,
            }}
            value={taskTitle}
            type="text"
          />
        </div>
        <span className="options">
          <span {...provided.dragHandleProps}>
            <DragIndicator />
          </span>
          <MoreVertIcon onClick={openDialog} />
        </span>
      </section>

      <TaskDetails task={task} closeDialog={closeDialog} isOpen={isOpen} />
    </>
  );
};
