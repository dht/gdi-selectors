import { createSelector } from 'reselect';
import { IRaylStore } from '@gdi/stores';

export const $i = (state: { rayl: IRaylStore }) => state.rayl;
const $n = (): null => null;
const $o = (): void => {};

export const $rawRaylState = createSelector($i, (state: IRaylStore) => state.appStateRayl); // prettier-ignore
export const $rawVideoClips = createSelector($i, (state: IRaylStore) => state.videoClips); // prettier-ignore
export const $rawFallacies = createSelector($i, (state: IRaylStore) => state.fallacies); // prettier-ignore
