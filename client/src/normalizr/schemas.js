import { schema } from 'normalizr';

export const ticket = new schema.Entity('tickets', {}, { idAttribute: 'id' });
