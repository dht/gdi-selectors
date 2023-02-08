import { generateActionsForStore } from 'redux-store-generator';
import { mixer as storeConfig, IMixerStore } from '@gdi/stores';

const { initialState } = storeConfig;

const generatedActions = generateActionsForStore<IMixerStore>(initialState);

export const actions = {
    ...generatedActions,
};
