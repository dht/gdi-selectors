import { generateActionsForStore } from 'redux-store-generator';
import { rayl as storeConfig, IRaylStore } from '@gdi/stores';

const { initialState } = storeConfig;

const generatedActions = generateActionsForStore<IRaylStore>(initialState);

export const actions = {
    ...generatedActions,
};
