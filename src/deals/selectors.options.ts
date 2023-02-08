import { createSelector } from 'reselect';
import * as raw from './selectors.raw';
import { minutesThisX } from '@gdi/language';
import { arrayToOptions, itemsTagsToOptions, optionsPeriod } from 'shared-base';

export const $i = (state: { deals: IDealsStore }) => state.deals;

export const $periods = createSelector($i, (_i): IOption[] => {
    const minutes = minutesThisX();
    return optionsPeriod(minutes, true);
});

export const $dealsTags = createSelector(raw.$rawDeals, (deals) => {
    return itemsTagsToOptions(deals);
});

export const $status = createSelector($i, (_i): IOption[] => {
    return arrayToOptions(['active', 'inactive', 'lost', 'deal', 'pending']);
});

export const $worth = createSelector($i, (_i): IOption[] => {
    return [
        {
            id: 'm0-20',
            text: '0-20',
            min: 0,
            max: 20,
        },
        {
            id: 'm20-40',
            text: '20-40',
            min: 20,
            max: 40,
        },
        {
            id: 'm40-100',
            text: '40-100',
            min: 40,
            max: 100,
        },
        {
            id: 'm100+',
            text: '100+',
            min: 100,
        },
    ];
});

export const $allOptions = createSelector(
    $periods,
    $status,
    $worth,
    $dealsTags,
    (periods, status, worth, dealsTags) => {
        return {
            $periods: periods,
            $status: status,
            $worth: worth,
            $dealsTags: dealsTags,
        } as IAllSelectOptions;
    }
);
