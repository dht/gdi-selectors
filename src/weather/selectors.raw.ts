import { createSelector } from 'reselect';
import { IWeatherStore } from '@gdi/stores';

export const $i = (state: { weather: IWeatherStore }) => state.weather;
const $n = (): null => null;
const $o = (): void => {};

export const $rawWeatherLocations = createSelector($i, (state) => state.weatherLocations); // prettier-ignore
export const $rawWeatherHourly = createSelector($i, (state) => state.weatherHourlyItems); // prettier-ignore
export const $rawWeatherDaily = createSelector($i, (state) => state.weatherDailyItems); // prettier-ignore

export const $now = createSelector($i, (_state) => {
    return {
        day: 1,
        week: 1,
        year: 1,
    };
});
