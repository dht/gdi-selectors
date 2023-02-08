import { createSelector } from 'reselect';
import { IVoiceStore } from '@gdi/stores';

export const $i = (state: { voice: IVoiceStore }) => state.voice;
const $n = (): null => null;
const $o = (): void => {};

export const $rawVoiceState = createSelector($i, (state: IVoiceStore) => state.appStateVoice); // prettier-ignore
