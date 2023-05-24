
import { CREATE_NEW_USER, LOGIN_USER,INSERT_AVATAR,GET_ERROR, ALL_USER } from '../type'

import { UseInsertData, UseInsertDataWithImage } from '../../hooks/useInsertData'
import { UseGetData } from '../../hooks/useGetData';


//create new user 
export const createNewUser = (data) => async (dispatch) => {
    try {
        const response = await UseInsertData(`/api/v1/auth/signup`, data);
        
        dispatch({
            type: CREATE_NEW_USER,
            payload: response,
           
        })

    } catch (e) {
        dispatch({
            type: CREATE_NEW_USER,
            payload: e.response,
        })
    }
}

//login  user 
export const loginUser = (data) => async (dispatch) => {
    try {
        const response = await UseInsertData(`/api/v1/auth/login`, data);
        console.log(response)
        dispatch({
            type: LOGIN_USER,
            payload: response,
            
        })

    } catch (e) {
        dispatch({
            type: LOGIN_USER,
            payload: e.response,
        })
    }
}


//get user
export const GetAllUser = (id) => async (dispatch) => {
    try {
        const response = await UseGetData(`/api/v1/auth/allusers/${id}`);
        console.log(response)
        dispatch({
            type: ALL_USER,
            payload: response,
            
        })

    } catch (e) {
        console.log(e.response)
        dispatch({
            type: GET_ERROR,
            payload: e.response,
        })
    }
}

//insert image 
export const InsertAvatar = (data) => async (dispatch) => {
    try {
        const response = await UseInsertData(`/api/v1/auth/setAvatar`, data);
        console.log(response)
        dispatch({
            type: INSERT_AVATAR,
            payload: response,
            
        })

    } catch (e) {
        console.log(e.response)
        dispatch({
            type: GET_ERROR,
            payload: e.response,
        })
    }
}