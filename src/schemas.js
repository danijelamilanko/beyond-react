import { schema } from 'normalizr';

export const jobSchema = new schema.Entity(
    'jobs',
    {},
    { idAttribute: '_id' }
);