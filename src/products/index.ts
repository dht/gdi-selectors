import { generateReducersForStore } from 'redux-store-generator';
import { products as storeConfig, IProductsStore } from '@gdi/stores';
import { actions } from './actions';
import { selectors } from './selectors.index';
import { mapValues } from '../_utils/map';

const { initialState, api } = storeConfig;

export const reducers = generateReducersForStore<IProductsStore>(initialState);

export const clearState = (store: any) => {
    setTimeout(() => {
        store.dispatch(actions.products.setAll({}));
    });

    return store;
};

export const endpointsConfigOverrides = (connectionType: ConnectionType) => {
    return mapValues(api, (endpoint: any) => {
        if (endpoint.connectionType === 'INHERIT') {
            endpoint.connectionType = connectionType;
        }

        return endpoint;
    });
};

export const products = {
    initialState,
    actions,
    reducers,
    selectors,
    endpointsConfigOverrides,
    clearState,
};
