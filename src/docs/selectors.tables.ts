import * as raw from './selectors.raw';
import { createSelector } from 'reselect';

export const $docs = createSelector(raw.$rawDocs, (docs) => {
    return Object.values(docs);
});
