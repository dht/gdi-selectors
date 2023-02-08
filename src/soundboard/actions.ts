import { generateActionsForStore } from 'redux-store-generator';
import { soundboard as storeConfig, ISoundboardStore } from '@gdi/stores';

const { initialState } = storeConfig;

const generatedActions =
    generateActionsForStore<ISoundboardStore>(initialState);

export const actions = {
    ...generatedActions,
};
