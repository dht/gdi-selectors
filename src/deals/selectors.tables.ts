import * as raw from './selectors.raw';
import { createSelector } from 'reselect';

export const $deals = createSelector(raw.$rawDeals, (deals) => {
    return Object.values(deals);
});
