import { generateActionsForStore } from 'redux-store-generator';
import { deals as storeConfig, IDealsStore } from '@gdi/stores';

const { initialState } = storeConfig;

const generatedActions = generateActionsForStore<IDealsStore>(initialState);

export const actions = {
    ...generatedActions,
};
