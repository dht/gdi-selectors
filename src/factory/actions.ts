import { generateActionsForStore } from 'redux-store-generator';
import { factory as storeConfig, IFactoryStore } from '@gdi/stores';

const { initialState } = storeConfig;

const generatedActions = generateActionsForStore<IFactoryStore>(initialState);

export const actions = {
    ...generatedActions,
};
