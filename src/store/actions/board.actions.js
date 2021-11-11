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
      const savedBoard = await boardService.add(boardToSave,loggedUser);
      dispatch({ type: "ADD_BOARD", savedBoard });
    } catch (err) {
      console.log("UserActions: err in add board", err);
    }
  };
}

export function removeBoard(board,loggedUser) {
  return async (dispatch) => {
    try {
      await boardService.remove(board._id,loggedUser);
      dispatch({ type: "REMOVE_BOARD", board });
    } catch (err) {
      console.log("UserActions: err in remove board", err);
    }
  };
}

export function reorderBoards(boards,loggedUser) {
  return async (dispatch) => {
    try {
     const updatedBoards = await boardService.reorderBoards(boards,loggedUser)
     dispatch({ type: "SET_BOARDS", boards:updatedBoards });
    } catch (err) {
      console.log("UserActions: err in reorder boards", err);
    }
  };
}

export function renameBoard(boardId, title,loggedUser) {
  return async (dispatch) => {
    try {
      const board = await boardService.renameBoard(boardId, title,loggedUser);
      console.log(board);
      dispatch({ type: "SET_BOARD", board });
    } catch (err) {
      console.log("UserActions: err in remove board", err);
    }
  };
}

export function toggleFavorite(boardId, isWorkspace,loggedUser) {
  return async (dispatch) => {
    try {
      const board = await boardService.toggleFavorite(boardId,loggedUser);
      if (!isWorkspace) dispatch({ type: "SET_BOARD", board });
      else {
          const boards = await boardService.query()
          dispatch({type:'SET_BOARDS',boards})
      }
    } catch (err) {
      console.log("UserActions: err in toggle favorite", err);
    }
  };
}

export function toggleBoardMember(boardId,user,loggedUser) {
  return async (dispatch) => {
    try {
      const board = await boardService.toggleBoardMember(boardId,user,loggedUser);
      dispatch({ type: "SET_BOARD", board });
    } catch (err) {
      console.log("UserActions: err in toggle board member", err);
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

export function renameGroup(boardId, groupId, title,loggedUser) {
  return async (dispatch) => {
    try {
      const board = await boardService.renameGroup(boardId, groupId, title,loggedUser);
      dispatch({ type: "SET_BOARD", board });
    } catch (err) {
      console.log("UserActions: err in rename group", err);
    }
  };
}


export function reorderGroups(id,groups,loggedUser) {
  return async (dispatch) => {
    try {
      const board = await boardService.reorderGroups(id,groups,loggedUser);
      dispatch({ type: "SET_BOARD", board });
    } catch (err) {
      console.log("UserActions: err in reorder groups", err);
    }
  };
}


//task

export function addTask(boardId, groupId, loggedUser,title) {
  return async (dispatch) => {
    try {
      const board = await boardService.addTask(boardId, groupId, loggedUser,title);
      dispatch({ type: "SET_BOARD", board });
    } catch (err) {
      console.log("UserActions: err in add task", err);
    }
  };
}

export function reorderTasks(boardId, groupIdx,newTasks,loggedUser) {
  return async (dispatch) => {
    try {
      const board = await boardService.reorderTasks(boardId, groupIdx,newTasks,loggedUser);
      dispatch({ type: "SET_BOARD", board });
    } catch (err) {
      console.log("UserActions: err in reorder task", err);
    }
  };
}

export function renameTask(boardId, groupId,taskId,title,loggedUser) {
  return async (dispatch) => {
    try {
      const board = await boardService.renameTask(boardId, groupId,taskId,title,loggedUser);
      dispatch({ type: "SET_BOARD", board });
    } catch (err) {
      console.log("UserActions: err in rename task", err);
    }
  };
}

export function removeTask(boardId, groupId,taskId,loggedUser) {
  return async (dispatch) => {
    try {
      const board = await boardService.removeTask(boardId, groupId,taskId,loggedUser);
      dispatch({ type: "SET_BOARD", board });
    } catch (err) {
      console.log("UserActions: err in remove task", err);
    }
  };
}


