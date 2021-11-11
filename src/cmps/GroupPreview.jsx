import { TaskList } from "./TaskList";
import { useSelector,useDispatch } from "react-redux";
import { removeGroup,renameGroup,addTask,reorderTasks } from "../store/actions/board.actions";
import {GroupMenu} from './GroupMenu'
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import VideocamIcon from '@mui/icons-material/Videocam';
import { useState,useRef } from "react";
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { DragDropContext,Droppable } from "react-beautiful-dnd";
export const GroupPreview = ({ group ,provided}) => {
  
  const dispatch = useDispatch()
  const board = useSelector(state => state.boardModule.board)
  const loggedUser = useSelector(state => state.userModule.loggedUser)
  const [groupTitle, setGroupTitle] = useState(group.title)
  const [taskTitle, setTaskTitle] = useState('')
  const titleRef = useRef()

  const onRemove = () => {
      dispatch(removeGroup(board._id,group.id))
  }

  const handleDragEnd = ({type,source,destination}) => {
    if (!destination) return
    const idx = board.groups.findIndex(group => group.id === type)
    const newTasks = [...board.groups[idx].tasks]
    const [reorderedTask] = newTasks.splice(source.index,1)
    newTasks.splice(destination.index,0,reorderedTask)
    dispatch(reorderTasks(board._id,idx,newTasks,loggedUser))
  }
  

  const taskHandleChange = (ev) => {
    setTaskTitle(ev.target.value)
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
     dispatch(addTask(board._id,group.id,loggedUser,taskTitle))
  }

  const handleChange = (ev) => {
    setGroupTitle(ev.target.value)
  }

  const onBlur = () => {
    dispatch(renameGroup(board._id,group.id,groupTitle,loggedUser))
  }

  return (
    <section className="group-preview flex column gap space-between"
    {...provided.draggableProps}
        ref={provided.innerRef}
       
    >
      <div className="group-header flex space-between">
        <span>
          <input
          style={{
            width:`${group?.title?.length + 1}ch`
          }}
          ref={titleRef} onBlur={onBlur} onChange={handleChange} value={groupTitle} type="text" />
        </span>

          <span className="options">

          <span  {...provided.dragHandleProps}>
    <DragIndicatorIcon/>
          </span>
    <GroupMenu titleRef={titleRef} onRemove={onRemove}/>
          </span>


      </div>

      <DragDropContext onDragEnd={handleDragEnd}>

        <Droppable type={`${group.id}`} droppableId="tasks">

          {(provided)=>(

            
            
           <span
           ref={provided.innerRef}
           {...provided.droppableProps}       
           >

{

        
      group?.tasks?.length && <TaskList  groupId={group.id} dropProvided={provided} tasks={group.tasks} />

}
           </span>
        )}

        </Droppable>

      </DragDropContext>

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
