
const initialState = {
  loggedUser: null,
  users: null
}

export function userReducer(state = initialState, action) {
    var newState = state;
    switch (action.type) {

      case 'SET_USERS':
            newState = {...state,users:action.users}
        break

      case 'SET_USER':
            newState = {...state,loggedUser:action.user}
        break
      
        default:
    }
    
    return newState;
}
