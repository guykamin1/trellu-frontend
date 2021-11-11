import { useParams } from "react-router";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadBoard,reorderGroups } from "../store/actions/board.actions";
import { GroupList } from "../cmps/GroupList";
import { BoardOptions } from "../cmps/BoardOptions";
import { loadUsers } from "../store/actions/user.actions";
import { useHistory } from "react-router";
import {DragDropContext,Droppable} from 'react-beautiful-dnd'

export const TrelluBoard = () => {
  const dispatch = useDispatch();

  const board = useSelector((state) => state.boardModule.board);
  const loggedUser = useSelector((state) => state.userModule.loggedUser);
  const history = useHistory();
  const { id } = useParams();

  const handleDragEnd = ({type,source,destination}) => {
    if (!destination) return
      const newGroups = [...board.groups]
      const [reorderedGroup] = newGroups.splice(source.index,1)
      newGroups.splice(destination.index,0,reorderedGroup)
      dispatch(reorderGroups(board._id,newGroups,loggedUser))
      
  }

  useEffect(() => {
    dispatch(loadBoard(id));
    dispatch(loadUsers());
    if (!board) history.push("/workspace");
  }, [board]);

  return (
    <section
      className="trellu-board flex column gap"
      style={{
        backgroundImage: `url(${board?.style.bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <BoardOptions />

      <DragDropContext onDragEnd={handleDragEnd}>

        <Droppable type='groups' droppableId="groups">

          {(provided) => (

            
            <span
            ref={provided.innerRef}
            {...provided.droppableProps}
            >

            {

              board?.groups.length && <GroupList  dropProvided={provided}  groups={board?.groups} />

            }

            {provided.placeholder}

            </span>

            )}

            

        </Droppable>

      </DragDropContext>

    </section>
  );
};
