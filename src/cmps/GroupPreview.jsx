import { TaskList } from "./TaskList";
import { useSelector,useDispatch } from "react-redux";
import { removeGroup,renameGroup } from "../store/actions/board.actions";
import {GroupMenu} from './GroupMenu'
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import VideocamIcon from '@mui/icons-material/Videocam';
import { useState,useRef } from "react";

export const GroupPreview = ({ group }) => {
  
  const dispatch = useDispatch()
  const board = useSelector(state => state.boardModule.board)
  const loggedUser = useSelector(state => state.userModule.loggedUser)
  const [groupTitle, setTitle] = useState(group.title)
  const titleRef = useRef()

  const onRemove = () => {
    if (loggedUser)
      dispatch(removeGroup(board._id,group.id))
    else
      alert('Log in first!')
  }

  const handleChange = (ev) => {
    setTitle(ev.target.value)
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
        <div className="add flex">

          <span className="add-btn flex center-center"
          
          >+</span>

          <input className="add-input" placeholder="Add a task" type="text" />
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
