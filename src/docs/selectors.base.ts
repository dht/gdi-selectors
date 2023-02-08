import * as raw from './selectors.raw';
import { createSelector } from 'reselect';

export const $docs = createSelector(raw.$rawDocs, (docs) => {
    return Object.values(docs);
});

export const $doc = createSelector(
    raw.$rawDocs,
    raw.$rawCurrentIds,
    (docs, currentIds) => {
        const { docId } = currentIds;

        if (!docId) {
            return Object.values(docs)[0];
        }

        return docs[docId];
    }
);
