import { generateActionsForStore } from 'redux-store-generator';
import { site as storeConfig, ISiteStore } from '@gdi/stores';

const { initialState } = storeConfig;

const generatedActions = generateActionsForStore<ISiteStore>(initialState);

export const actions = {
    ...generatedActions,
};
