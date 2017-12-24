import { normalize } from 'normalizr';
import { JOBS_FETCHED } from '../types';
import api from '../api';
import { jobSchema } from '../schemas';

// data.entities.jobs
const jobsFetched = data => ({
    type: JOBS_FETCHED,
    data
});

export const fetchJobs = () => dispatch => {
    api.jobs
        .fetchAll()
        .then(jobs => dispatch(jobsFetched(normalize(jobs, [jobSchema]))));
};