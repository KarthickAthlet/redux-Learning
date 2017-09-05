import {combineReducers} from 'redux';
import CourseReducers from './courseReducer'

// Defining the root reducer to combine multiple reducer 

const rootReducer = combineReducers({
    CourseReducers: CourseReducers
});

export default rootReducer;