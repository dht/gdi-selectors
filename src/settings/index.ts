import { generateReducersForStore } from 'redux-store-generator';
import { settings as storeConfig, ISettingsStore } from '@gdi/stores';
import { actions } from './actions';
import { selectors } from './selectors.index';
import { mapValues } from '../_utils/map';

const { initialState, api } = storeConfig;

export const reducers = generateReducersForStore<ISettingsStore>(initialState);

export const clearState = (store: any) => {
    setTimeout(() => {});

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

export const settings = {
    initialState,
    actions,
    reducers,
    selectors,
    endpointsConfigOverrides,
    clearState,
};
