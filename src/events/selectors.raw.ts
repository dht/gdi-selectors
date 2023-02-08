import { createSelector } from 'reselect';
import { IEventsStore } from '@gdi/stores';

export const $i = (state: { events: IEventsStore }) => state.events;
const $n = (): null => null;
const $o = (): void => {};

export const $rawEventsState = createSelector($i, (state: IEventsStore) => state.appStateEvents); // prettier-ignore
export const $rawEvents = createSelector($i, (state: IEventsStore) => state.events); // prettier-ignore
export const $rawReminders = createSelector($i, (state: IEventsStore) => state.reminders); // prettier-ignore
