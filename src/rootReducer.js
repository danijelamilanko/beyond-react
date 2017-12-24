import { combineReducers } from 'redux';
import user from "./reducers/user";
import jobs from "./reducers/jobs";

export default combineReducers({
    user,
    jobs
});