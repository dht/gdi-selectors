import { generateActionsForStore } from 'redux-store-generator';
import { products as storeConfig, IProductsStore } from '@gdi/stores';

const { initialState } = storeConfig;

const generatedActions = generateActionsForStore<IProductsStore>(initialState);

export const actions = {
    ...generatedActions,
};
