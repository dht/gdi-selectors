import { createSelector } from 'reselect';
import { IDealsStore } from '@gdi/stores';

export const $i = (state: { deals: IDealsStore }) => state.deals;
const $n = (): null => null;
const $o = (): void => {};

export const $rawDealsState = createSelector($i, (state: IDealsStore) => state.appStateDeals); // prettier-ignore
export const $rawDeals = createSelector($i, (state: IDealsStore) => state.deals); // prettier-ignore
