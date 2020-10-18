import { FETCH_CATEGORY, FETCH_HILIGHTED, FETCH_PARTNER } from "../actions/actionTypes";

export default (state = {},action)=>{
    switch(action.type){
        case FETCH_HILIGHTED:
            return {...state, highlighted:action.payload}
        case FETCH_CATEGORY: 
            return {...state,[action.payload.category]:action.payload.data}
        case FETCH_PARTNER: 
            return {...state,[action.payload.name]:action.payload.data}
        default:
            return state
    }
}