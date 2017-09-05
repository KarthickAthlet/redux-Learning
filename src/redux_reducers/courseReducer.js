export default function CourseReducers(state = [], action) {
    switch (action.type) {
        case "COURSE_ACTION_ADD":
            return [...state, Object.assign({}, action.courses)];
        default:
            return state;
    }

}