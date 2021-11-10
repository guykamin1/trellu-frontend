import { httpService } from "./http.service";
import { boardUtils } from "./board-utils";
export const boardService = {
    //board
    query,
    get,
    update,
    remove,
    add,
    renameBoard,
    toggleFavorite,
    //group
    removeGroup,
    addGroup,
    renameGroup,
}
//board
async function query(){
    try{
        return await httpService.get('board')
    }catch(err){
        throw(err)
    }
} 

async function get(id){
    try{
        return await httpService.get(`board/${id}`)
    }catch(err){
        throw(err)
    }
} 

async function add(boardToSave){
    try{
        return await httpService.post(`board`,boardToSave)
    }catch(err){
        throw(err)
    }
} 

async function update(board){
    try{
        return await httpService.put(`board`,board)
    }catch(err){
        throw(err)
    }
} 

async function remove(id){
    try{
        return await httpService.delete(`board/${id}`)
    }catch(err){
        throw(err)
    }
} 

async function renameBoard(boardId,title){
    try{
        const board = await get(boardId)
        board.title = title
        return await httpService.put(`board`,board)
    }catch(err){
        throw(err)
    }
} 

async function toggleFavorite(boardId){
    try{
        const board = await get(boardId)
        board.isFavorite = !board.isFavorite
        return await httpService.put(`board`,board)
    }catch(err){
        throw(err)
    }
} 


//group
async function removeGroup(boardId,groupId){
    try{

        const board = await get(boardId)
        board.groups = board.groups.filter(group => group.id !== groupId)
        return await httpService.put(`board`,board)

    }catch(err){
        throw(err)
    }
} 

async function addGroup(boardId,title,loggedUser){
    try{

        const board = await get(boardId)
        const newGroup = boardUtils.getGroup(loggedUser)
        newGroup.title = title
        board.groups.unshift(newGroup)
        return await httpService.put(`board`,board)

    }catch(err){
        throw(err)
    }
} 

async function renameGroup(boardId,groupId,title){
    try{

        const board = await get(boardId)
        const idx = board.groups.findIndex(group => group.id === groupId)
        board.groups[idx].title = title
        return await httpService.put(`board`,board)
    }catch(err){
        throw(err)
    }
} 
