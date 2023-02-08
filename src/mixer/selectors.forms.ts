import * as base from './selectors.base';
import { createSelector } from 'reselect';

export const $i = (state: { mixer: IMixerStore }) => state.mixer;

export const $contentFormOptions = createSelector(
    base.$instanceContent,
    (instances): Json => {
        return {};
    }
);

export const $contentFormOptionsSelected = createSelector(
    base.$instanceSelected,
    (instances): Json => {
        return {};
    }
);
