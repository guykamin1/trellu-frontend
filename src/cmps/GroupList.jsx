import { GroupPreview } from "./GroupPreview";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { addGroup } from "../store/actions/board.actions";
export const GroupList = ({ groups }) => {

  const [isAddGroup, setAddGroup] = useState(false)
  const [title, setTitle] = useState('')
  const dispatch = useDispatch()
   const board = useSelector(state => state.boardModule.board)
   const loggedUser = useSelector(state => state.userModule.loggedUser)

  const onAdd = () => {
    if (title)
      dispatch(addGroup(board._id,title,loggedUser))

  }

  return (
    <section className="group-list flex gap">
      {groups.map((group) => (
        <GroupPreview group={group} key={group.id} />
      ))}
      <div className="add-group flex center-center">
        {
          !isAddGroup? <span onClick={
            () => {
               setAddGroup(true)
            }
          }>+</span> : 
          <div className="cmp flex column">

            <div className="head flex justify-end">

             <button onClick={
               () => {setAddGroup(false)}
              }>x</button>

              </div>
              <div className="body flex column center-center">

            <input onChange={
              (ev) => {setTitle(ev.target.value)}
            } value={title} placeholder="Group title" type="text" />
            <button onClick={onAdd}>Add</button>
           
            </div>

          </div>
        }
      </div>
    </section>
  );
};
