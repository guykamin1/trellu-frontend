
const initialState = {
  loggedUser: null
}

export function userReducer(state = initialState, action) {
    var newState = state;
    switch (action.type) {

      case 'SET_USER':
        console.log(action.user);
            newState = {...state,loggedUser:action.user}
        break
      
        default:
    }
    
    return newState;
}
