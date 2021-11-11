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
    toggleBoardMember,
    reorderBoards,
    //group
    removeGroup,
    addGroup,
    renameGroup,
    reorderGroups,
    //task
    addTask,
    reorderTasks,
    renameTask,
    removeTask
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

async function toggleBoardMember(boardId,user){
    try{
        const board = await get(boardId)

        const idx = board.members.findIndex(curr => curr._id === user._id)
        
        if (idx === -1) board.members.push(user)
        else board.members.splice(idx,1)

        return await httpService.put(`board`,board)
        
    }catch(err){
        throw(err)
    }
} 

async function reorderBoards(boards){
    try{
        return await httpService.put(`board/boards`,boards)
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

async function reorderGroups(id,groups){
    try{
        const board = await get(id)
        board.groups = groups
        return await httpService.put(`board`,board)
    }catch(err){
        throw(err)
    }
} 
//task
async function addTask(boardId, groupId, loggedUser,title){
    try{
        const newTask = boardUtils.getTask(loggedUser)
        newTask.title = title
        const board = await get(boardId)
        const idx = board.groups.findIndex(group => group.id === groupId)
        board.groups[idx].tasks.unshift(newTask)
        return await httpService.put(`board`,board)
    }catch(err){
        throw(err)
    }
} 

async function reorderTasks(boardId, groupIdx,newTasks){
    try{
        const board = await get(boardId)
        board.groups[groupIdx].tasks = newTasks
        return await httpService.put(`board`,board)
    }catch(err){
        throw(err)
    }
} 

async function renameTask(boardId, groupId,taskId,title){
    try{
        const board = await get(boardId)
        const gIdx = board.groups.findIndex(group => group.id === groupId)
        const tIdx = board.groups[gIdx].tasks.findIndex(task => task.id === taskId)
        board.groups[gIdx].tasks[tIdx].title = title
        return await httpService.put(`board`,board)
    }catch(err){
        throw(err)
    }
} 

async function removeTask(boardId, groupId,taskId){
    try{
        const board = await get(boardId)
        const gIdx = board.groups.findIndex(group => group.id === groupId)
        const tIdx = board.groups[gIdx].tasks.findIndex(task => task.id === taskId)
        board.groups[gIdx].tasks.splice(tIdx,1)
        return await httpService.put(`board`,board)
    }catch(err){
        throw(err)
    }
} 

function _addActivity(board,entity,action,loggedUser){

    if (board.activities.length === 50) board.activities = []

    const activity = {
        entity,
        action,
        loggedUser
    }

    board.activities.push(activity)

    return board

}
