import {createSelector} from 'reselect';
import {JOBS_FETCHED, JOB_CREATED} from '../types';

export default function jobs(state = {}, action = {}) {
    switch (action.type) {
        case JOBS_FETCHED:
            return action.data.entities.jobs;
        case JOB_CREATED:
            return {...state, ...action.data.entities.jobs};
        default:
            return state;
    }
}

// SELECTORS

export const jobsSelector = state => state.jobs;

export const allJobsSelector = createSelector(
    jobsSelector,
    jobsHash => Object.values(jobsHash)
);