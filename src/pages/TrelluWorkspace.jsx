import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadBoards } from "../store/actions/board.actions";
import { BoardList } from "../cmps/BoardList";
export const TrelluWorkspace = () => {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boardModule.boards);

  useEffect(() => {
    dispatch(loadBoards());
  }, []);

  return (
    <section className="trellu-workspace flex column align-center">

      <div className="title">
        <span className="title">Your Workspace</span>
      </div>




          
          

          
          {

            boards && <BoardList  boards={boards} />
          
          }
          
        
          

            




    </section>
  );
};
