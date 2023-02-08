import { generateActionsForStore } from 'redux-store-generator';
import { settings as storeConfig, ISettingsStore } from '@gdi/stores';

const { initialState } = storeConfig;

const generatedActions = generateActionsForStore<ISettingsStore>(initialState);

export const actions = {
    ...generatedActions,
};
