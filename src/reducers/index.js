import { combineReducers } from 'redux'
import eat from './eat'
import info from './info'
const appReducers = combineReducers({
    eat,
    info,

});

export default appReducers;