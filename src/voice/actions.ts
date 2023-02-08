import { generateActionsForStore } from 'redux-store-generator';
import { voice as storeConfig, IVoiceStore } from '@gdi/stores';

const { initialState } = storeConfig;

const generatedActions = generateActionsForStore<IVoiceStore>(initialState);

export const actions = {
    ...generatedActions,
};
