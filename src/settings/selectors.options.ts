import { createSelector } from 'reselect';
import { minutesThisX } from '@gdi/language';
import { arrayToOptions, optionsPeriod } from 'shared-base';
import businessDomains from './data/businessDomains.json';
import cities from './data/cities.json';
import currencies from './data/currencies.json';

const $i = () => {};

export const $periods = createSelector($i, (_i): IOption[] => {
    const minutes = minutesThisX();
    return optionsPeriod(minutes, true);
});

export const $businessDomains = createSelector($i, (): IOption[] => {
    return arrayToOptions(businessDomains);
});

export const $cities = createSelector($i, (): IOption[] => {
    return arrayToOptions(cities);
});

export const $currencies = createSelector($i, (): IOption[] => {
    return arrayToOptions(currencies);
});

export const $allOptions = createSelector(
    $periods,
    $businessDomains,
    $cities,
    $currencies,
    (periods, businessDomains, cities, currencies) => {
        return {
            $businessDomains: businessDomains,
            $cities: cities,
            $periods: periods,
            $currencies: currencies,
        };
    }
);
