import { generateReducersForStore } from 'redux-store-generator';
import { tasks as storeConfig, ITasksStore } from '@gdi/stores';
import { actions } from './actions';
import { selectors } from './selectors.index';
import { mapValues } from '../_utils/map';

const { initialState, api } = storeConfig;

export const reducers = generateReducersForStore<ITasksStore>(initialState);

export const clearState = (store: any) => {
    setTimeout(() => {
        store.dispatch(actions.worklogs.setAll({}));
        store.dispatch(actions.recentSessions.setAll({}));
        store.dispatch(actions.projects.setAll({}));
        store.dispatch(actions.tickets.setAll({}));
        store.dispatch(actions.sessions.setAll({}));
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

export const tasks = {
    initialState,
    actions,
    reducers,
    selectors,
    endpointsConfigOverrides,
    clearState,
};
