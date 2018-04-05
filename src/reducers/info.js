import * as Types from './../constants/ActionTypes'

var initialState = []

const info = (state = initialState, action) => {
    switch(action.type){
        case  Types.GET_INFO:
            state=action.info;
            return state;
        default: return[...state]
    }
}

export default info