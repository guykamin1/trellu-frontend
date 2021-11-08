import { boardService } from "../../services/board.service"

export function loadBoards() {
    return async dispatch => {
        try {

         const boards = await boardService.query()
         dispatch({type:'SET_BOARDS',boards})
        } catch (err) {
            console.log('UserActions: err in load boards', err)
        } 
    }
}

export function loadBoard(id) {
    return async dispatch => {
        try {
         const board = await boardService.get(id)
         console.log(board);
         dispatch({type:'SET_BOARD',board})
        } catch (err) {
            console.log('UserActions: err in load boards', err)
        } 
    }
}