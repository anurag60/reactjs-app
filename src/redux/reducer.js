import * as types from './actionTypes'
const initialUserState = {
    loading: false,
    users: [],
    user: {}
}

const initialRolesState = {
    loading: false,
    roles: []
}

export const usersReducer = (state = initialUserState, action)  => {
    switch(action.type) {
        case types.GET_USERS:
         return {
             ...state,
             loading: false,
             users: action.payload
         }
        default:
            return state;
    }
}

export const rolesReducer = (state = initialRolesState, action) => {
    console.log(action.payload);
    switch (action.type) {
        case types.GET_ROLES:
            return {
                ...state,
                loading:false,
                roles: action.payload
            }    
        default:
            return state;
    }
}