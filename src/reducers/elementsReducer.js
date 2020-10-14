import { STORE_COMPERVAN_IMAGE } from "../actions/actionTypes";

export default (state={},action) => {
    switch (action.type){
        case STORE_COMPERVAN_IMAGE:
            return{...state,compervanImage:action.payload}
            default:
            return state
    }
}