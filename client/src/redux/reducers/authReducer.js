import { CREATE_NEW_USER, LOGIN_USER,INSERT_AVATAR, GET_ERROR,ALL_USER } from '../type'

const inital = {
    createUser: [],
    loginUser: [],
    addAvatar: [],
    allUser:[],
    loading: true,
}
const authReducer = (state = inital, action) => {
    switch (action.type) {
        case CREATE_NEW_USER:
            return {
                ...state,
                createUser: action.payload,
                loading: false,
            }
        case LOGIN_USER:
            return {
                ...state,
                loginUser: action.payload,
                loading: false,
            }
            case ALL_USER:
            return {
                ...state,
                allUser: action.payload,
                loading: false,
            }
        case INSERT_AVATAR:
            return {
                ...state,
                addAvatar: action.payload,
                loading: false,
            }
            case GET_ERROR:
            return {
               
                addAvatar: action.payload,
                loading: true,
            }
        default:
            return state;
    }
}
export default authReducer