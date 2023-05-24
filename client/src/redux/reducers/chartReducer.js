import { GET_ALL_MASSAGES,GET_ONE_MASSAGES,GET_ERROR,CREATE_MASSAGES  } from '../type'

const inital = {
    allMassage: [],
    oneMassage: [],
    createMassage:[],
    loading: true,
}
const chatReducer = (state = inital, action) => {
    switch (action.type) {
        case GET_ALL_MASSAGES:
            return {
                ...state,
                allMassage: action.payload,
                loading: false,
            }
            case GET_ONE_MASSAGES:
                return {
                    ...state,
                    oneMassage: action.payload,
                    loading: false,
                }
                case CREATE_MASSAGES:
                return {
                    ...state,
                    createMassage: action.payload,
                    loading: false,
                }
        case GET_ERROR:
            return {
                loading: true,
                allMassage: action.payload,
            }
        default:
            return state;
    }
}
export default chatReducer