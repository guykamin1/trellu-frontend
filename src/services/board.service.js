import { httpService } from "./http.service";

export const boardService = {
    query,
    get
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