
import { GET_ONE_MASSAGES, GET_ALL_MASSAGES,GET_ERROR,CREATE_MASSAGES } from '../type'


import { useGetData, UseGetDataToken } from '../../hooks/useGetData';
import { UseInsertData, useInsertDataWithImage } from '../../hooks/useInsertData';


//getOneMessages
export const getOneMessages = (id) => async (dispatch) => {
    try {
        const response = await UseGetDataToken(`/api/v1/massage/getMessages/${id}`);
        dispatch({
            type: GET_ONE_MASSAGES,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}


//get All Messages 
export const getAllMessages = () => async (dispatch) => {
    try {
        const response = await UseGetDataToken(`/api/v1/massage/getMessages`);
        dispatch({
            type: GET_ALL_MASSAGES,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}

//create Messages 
export const createMassages = (formData) => async (dispatch) => {
    try {
        const response = await UseInsertData(`/api/v1/addMessage`, formData);
        dispatch({
            type: CREATE_MASSAGES,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}