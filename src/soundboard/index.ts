import { generateReducersForStore } from 'redux-store-generator';
import { soundboard as storeConfig, ISoundboardStore } from '@gdi/stores';
import { actions } from './actions';
import { selectors } from './selectors.index';
import { mapValues } from '../_utils/map';

const { initialState, api } = storeConfig;

export const reducers =
    generateReducersForStore<ISoundboardStore>(initialState);

export const clearState = (store: any) => {
    setTimeout(() => {
        store.dispatch(actions.actualManas.setAll({}));
        store.dispatch(actions.expectedManas.setAll({}));
        store.dispatch(actions.scheduleSessions.setAll({}));
        store.dispatch(actions.scheduleBlocks.setAll({}));
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

export const soundboard = {
    initialState,
    actions,
    reducers,
    selectors,
    endpointsConfigOverrides,
    clearState,
};
