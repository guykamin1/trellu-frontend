const initialState = {
    boards: null,
    board:null
}

export function boardReducer(state = initialState, action) {
    
    var newState = state;
    switch (action.type) {

        case 'SET_BOARDS':
            newState = {...state,boards:action.boards}
            break

        case 'SET_BOARD':
            newState = {...state,board:action.board}
            break
      
        default:
    }
   
    return newState;
}
