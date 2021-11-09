import { httpService } from "./http.service";

export const boardService = {
    query,
    get,
    update,
    remove
}

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
