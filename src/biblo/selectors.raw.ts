import { IBibloStore } from '@gdi/stores';
import { createSelector } from 'reselect';

export const $i = (state: { biblo: IBibloStore }) => state.biblo;
const $n = (): null => null;
const $o = (): void => {};

export const $rawBibloState = createSelector($i, (state: IBibloStore) => state.appStateBiblo); // prettier-ignore
export const $rawInterestingReads = createSelector($i, (state: IBibloStore) => state.interestingReads); // prettier-ignore
export const $rawReadCategories = createSelector($i, (state: IBibloStore) => state.readCategories); // prettier-ignore
