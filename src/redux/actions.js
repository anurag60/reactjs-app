import axios from 'axios';
import * as types from './actionTypes';

const getUSers = (users) => ({
    type: types.GET_USERS,
    payload: users,
})

const getRoles = (roles) => ({
    type: types.GET_ROLES,
    payload: roles
})

export const loadUsers = () => {
    return function (dispatch) {
        axios
        //.get(`${process.env.REACT_APP_API}`)
        .get('http://localhost:3006/userData')
        .then((response) => {
            dispatch(getUSers(response.data));
        })
        .catch((error) => {
            console.log(error);
        })
    }
}

export const loadRoles = () => {
    return function (dispatch) {
        axios
        .get('http://localhost:3006/roles')
        .then((response) => {
            console.log(response.data);
            dispatch(getRoles(response.data));
        })
        .catch(error => {
            console.log(error);
        })
    }
}