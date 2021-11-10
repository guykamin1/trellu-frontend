import { TaskList } from "./TaskList";
import { useSelector,useDispatch } from "react-redux";
import { removeGroup,renameGroup,addTask } from "../store/actions/board.actions";
import {GroupMenu} from './GroupMenu'
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import VideocamIcon from '@mui/icons-material/Videocam';
import { useState,useRef } from "react";

export const GroupPreview = ({ group }) => {
  
  const dispatch = useDispatch()
  const board = useSelector(state => state.boardModule.board)
  const loggedUser = useSelector(state => state.userModule.loggedUser)
  const [groupTitle, setGroupTitle] = useState(group.title)
  const [taskTitle, setTaskTitle] = useState('')
  const titleRef = useRef()

  const onRemove = () => {
      dispatch(removeGroup(board._id,group.id))
  }

  const taskHandleChange = (ev) => {
    setTaskTitle(ev.target.value)
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    if (taskTitle) dispatch(addTask(board._id,group.id,loggedUser,taskTitle))
  }

  const handleChange = (ev) => {
    setGroupTitle(ev.target.value)
  }

  const onBlur = () => {
    dispatch(renameGroup(board._id,group.id,groupTitle))
  }

  return (
    <section className="group-preview flex column gap">
      <div className="group-header flex space-between">
        <span>
          <input ref={titleRef} onBlur={onBlur} onChange={handleChange} value={groupTitle} type="text" />
        </span>

    <GroupMenu titleRef={titleRef} onRemove={onRemove}/>

      </div>

      {group.tasks.length && <TaskList tasks={group.tasks} />}

      <div className="group-footer flex space-between">
        <div className="add">
        <form onSubmit={handleSubmit} className="flex" action="">

          <button className="add-btn flex center-center"
          
          >+</button>

          <input onChange={taskHandleChange} value={taskTitle} className="add-input" placeholder="Add a task" type="text" />
          </form>
        </div>

        <div className="av flex center-center">
          <span className="audio flex center-center"><AudiotrackIcon
          style={{
            fontSize:'1rem'
          }}
          /></span>
          <span className="video flex center-center" ><VideocamIcon
           style={{
            fontSize:'1rem'
          }}
          /></span>
        </div>
      </div>
    </section>
  );
};
