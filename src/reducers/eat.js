import * as Types from './../constants/ActionTypes'
import {contributeData} from './../data'
// localStorage.setItem('contributeData', JSON.stringify(contributeData));

var initialState = JSON.parse(localStorage.getItem('contributeData'));




var findIndex = (member, id) => {
    var result = -1;
    member.forEach((mem, index) => {
        if (mem.id === id) {
            result = index;
        }
    });
    return result;
}


const eat = (state = initialState, action) => {
    var index = -1;
    switch (action.type) {
        case Types.FETCH_CONTRIBUTE:
            state = action.contribute;
            localStorage.setItem('contributeData', JSON.stringify(state))
            return [...state]
        case Types.ADD_CONTRIBUTE:
            index = findIndex(state, action.contribute.id);
            action.contribute.details.mem.forEach((m => {
                var a = findIndex(state, m)
                // state[a].totalSpent += Number.parseFloat(action.contribute.details.spent, 10).toFixed(2)
                state[a].totalSpent += Number(action.contribute.details.spent, 10).toFixed(2);
                state[a].totalSpent = parseInt(state[a].totalSpent)
            }))
            state[index].details.push(action.contribute.details);
            localStorage.setItem('contributeData', JSON.stringify(state))

            return [...state];
        
        default: return [...state];
    }
}

export default eat