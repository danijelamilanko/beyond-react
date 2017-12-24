import {normalize} from 'normalizr';
import {JOBS_FETCHED, JOB_CREATED} from '../types';
import api from '../api';
import {jobSchema} from '../schemas';

// data.entities.jobs
const jobsFetched = data => ({
    type: JOBS_FETCHED,
    data
});

const jobCreated = data => ({
    type: JOB_CREATED,
    data
});

export const fetchJobs = () => dispatch => {
    api.jobs
        .fetchAll()
        .then(jobs => dispatch(jobsFetched(normalize(jobs, [jobSchema]))));
};

export const fetchJobsAuth = () => dispatch => {
    api.jobs
        .fetchAllAuth()
        .then(jobs => dispatch(jobsFetched(normalize(jobs, [jobSchema]))));
};

export const createJob = data => dispatch =>
    api.jobs
        .create(data)
        .then(job => dispatch(jobCreated(normalize(job, jobSchema))));