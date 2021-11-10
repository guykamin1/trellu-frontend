import { userService } from "../../services/user.service"

export function loadUsers() {
    return async dispatch => {
        try {

            const users = await userService.query()


             dispatch({type:'SET_USERS',users})
              
            
        } catch (err) {
            console.log('UserActions: err in login', err)
        } 
    }
}

export function login(creds) {
    return async dispatch => {
        try {

            const user = await userService.login(creds)


            if (user) dispatch({type:'SET_USER',user})
              
            
        } catch (err) {
            console.log('UserActions: err in login', err)
        } 
    }
}

export function logout() {
    return async dispatch => {
        try {

          await userService.logout()
          dispatch({type:'SET_USER',user:null})
              
            
        } catch (err) {
            console.log('UserActions: err in logout', err)
        } 
    }
}

export function signup(creds) {
    return async dispatch => {
        try {

          const user = await userService.signup(creds)
          dispatch({type:'SET_USER',user})
              
            
        } catch (err) {
            console.log('UserActions: err in signup', err)
        } 
    }
}