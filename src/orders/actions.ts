import { generateActionsForStore } from 'redux-store-generator';
import { orders as storeConfig, IOrdersStore } from '@gdi/stores';

const { initialState } = storeConfig;

const generatedActions = generateActionsForStore<IOrdersStore>(initialState);

export const actions = {
    ...generatedActions,
};
