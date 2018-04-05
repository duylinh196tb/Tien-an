import * as Types from './../constants/ActionTypes'


export const actAddContribute = contribute => {
    return {
        type: Types.ADD_CONTRIBUTE,
        contribute
    }
}
 
export const actGetInfo = info => {
    return {
        type: Types.GET_INFO,
        info
    }
}

