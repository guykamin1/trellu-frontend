import { boardService } from "../../services/board.service";
import { boardUtils } from "../../services/board-utils";
//board
export function loadBoards() {
  return async (dispatch) => {
    try {
      const boards = await boardService.query();
      dispatch({ type: "SET_BOARDS", boards });
    } catch (err) {
      console.log("UserActions: err in load boards", err);
    }
  };
}

export function loadBoard(id) {
  return async (dispatch) => {
    try {
      const board = await boardService.get(id);
      dispatch({ type: "SET_BOARD", board });
    } catch (err) {
      console.log("UserActions: err in load board", err);
    }
  };
}

export function addBoard(boardTitle, bg, loggedUser) {
  return async (dispatch) => {
    try {
      const boardToSave = boardUtils.getBoard(boardTitle, bg, loggedUser);
      const savedBoard = await boardService.add(boardToSave);
      dispatch({ type: "ADD_BOARD", savedBoard });
    } catch (err) {
      console.log("UserActions: err in add board", err);
    }
  };
}

export function removeBoard(board) {
  return async (dispatch) => {
    try {
      await boardService.remove(board._id);
      dispatch({ type: "REMOVE_BOARD", board });
    } catch (err) {
      console.log("UserActions: err in remove board", err);
    }
  };
}

export function renameBoard(boardId, title) {
  return async (dispatch) => {
    try {
      const board = await boardService.renameBoard(boardId, title);
      console.log(board);
      dispatch({ type: "SET_BOARD", board });
    } catch (err) {
      console.log("UserActions: err in remove board", err);
    }
  };
}

export function toggleFavorite(boardId, isWorkspace) {
  return async (dispatch) => {
    try {
      const board = await boardService.toggleFavorite(boardId);
      if (!isWorkspace) dispatch({ type: "SET_BOARD", board });
      else {
          const boards = await boardService.query()
          dispatch({type:'SET_BOARDS',boards})
      }
    } catch (err) {
      console.log("UserActions: err in remove board", err);
    }
  };
}
//group
export function removeGroup(boardId, groupId) {
  return async (dispatch) => {
    try {
      const board = await boardService.removeGroup(boardId, groupId);
      dispatch({ type: "SET_BOARD", board });
    } catch (err) {
      console.log("UserActions: err in remove group", err);
    }
  };
}

export function addGroup(boardId, title, loggedUser) {
  return async (dispatch) => {
    try {
      const board = await boardService.addGroup(boardId, title, loggedUser);
      dispatch({ type: "SET_BOARD", board });
    } catch (err) {
      console.log("UserActions: err in add group", err);
    }
  };
}

export function renameGroup(boardId, groupId, title) {
  return async (dispatch) => {
    try {
      const board = await boardService.renameGroup(boardId, groupId, title);
      dispatch({ type: "SET_BOARD", board });
    } catch (err) {
      console.log("UserActions: err in rename group", err);
    }
  };
}
