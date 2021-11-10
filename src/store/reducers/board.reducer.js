const initialState = {
  boards: null,
  board: null,
};

export function boardReducer(state = initialState, action) {
  var newState = state;
  switch (action.type) {
    case "SET_BOARDS":
      newState = { ...state, boards: action.boards };
      break;

    case "SET_BOARD":
      newState = { ...state, board: action.board };
      break;

    case "ADD_BOARD":
      newState = { ...state, boards: [...state.boards, action.savedBoard] };
      break;

    case "REMOVE_BOARD":
      newState = {
        ...state,
        boards: state.boards.filter((board) => board._id !== action.board._id),
      };
      if (action.board === state.board)
        newState = {...state,board:null}
      break;

    default:
  }

  return newState;
}
