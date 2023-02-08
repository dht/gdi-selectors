import { IBusinessStore } from '@gdi/stores';
import { createSelector } from 'reselect';

export const $i = (state: { business: IBusinessStore }) => state.business;
const $n = (): null => null;
const $o = (): void => {};

export const $rawMeta = createSelector($i, (state: IBusinessStore) => state.meta); // prettier-ignore
export const $rawBusiness = createSelector($i, (state: IBusinessStore) => state.business); // prettier-ignore
