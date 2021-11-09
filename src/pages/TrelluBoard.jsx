import { useParams } from "react-router";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadBoard } from "../store/actions/board.actions";
import { GroupList } from "../cmps/GroupList";
import { BoardOptions } from "../cmps/BoardOptions";
export const TrelluBoard = () => {
  const dispatch = useDispatch();

  const board = useSelector((state) => state.boardModule.board);

  const { id } = useParams();

  useEffect(() => {
    dispatch(loadBoard(id));
  }, []);

  return (
    <section
     className="trellu-board flex column gap"
     style={{
       backgroundImage:`url(${board?.style.bgImg})`,
       backgroundRepeat:'no-repeat',
       backgroundSize:'cover'
     }}
     >
       <BoardOptions/>
      {board?.groups.length && <GroupList groups={board?.groups} />}
    </section>
  );
};
