import { createSelector } from 'reselect';
import { IDocsStore } from '@gdi/stores';

export const $i = (state: { docs: IDocsStore }) => state.docs;
const $n = (): null => null;
const $o = (): void => {};

export const $rawDocsState = createSelector($i, (state: IDocsStore) => state.appStateDocs); // prettier-ignore
export const $rawCurrentIds = createSelector($i, (state: IDocsStore) => state.currentIdsDocs); // prettier-ignore
export const $rawDocs = createSelector($i, (state: IDocsStore) => state.docs); // prettier-ignore
