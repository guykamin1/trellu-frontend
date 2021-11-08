// import { storageService } from './async-storage.service'
// import { socketService, SOCKET_EVENT_USER_UPDATED } from './socket.service'
// var gWatchedUser = null;
import { httpService } from './http.service'

const STORAGE_KEY = 'loggedinUser'

export const userService = {
    login,
    logout,
    signup
}

async function login(creds){
    try{
        return await httpService.post('auth/login',{creds})
    }catch(err){
        throw(err)
    }
} 

async function signup(creds){
    try{
        return await httpService.post('auth/signup',{creds})
    }catch(err){
        throw(err)
    }
}

async function logout(){
    try{
        return await httpService.post('auth/logout')
    }catch(err){
        throw(err)
    }
}






















