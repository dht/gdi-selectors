import { generateActionsForStore } from 'redux-store-generator';
import { carts as storeConfig, ICartsStore } from '@gdi/stores';

const { initialState } = storeConfig;

const generatedActions = generateActionsForStore<ICartsStore>(initialState);

export const actions = {
    ...generatedActions,
};
