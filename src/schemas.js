import { schema } from 'normalizr';

export const itemSchema = new schema.Entity(
    'items',
    {},
    { idAttribute: '_id' }
);