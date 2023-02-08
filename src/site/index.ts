import { generateReducersForStore } from 'redux-store-generator';
import { site as storeConfig, ISiteStore } from '@gdi/stores';
import { actions } from './actions';
import { selectors } from './selectors.index';
import { mapValues } from '../_utils/map';

const { initialState, api } = storeConfig;

export const reducers = generateReducersForStore<ISiteStore>(initialState);

export const clearState = (store: any) => {
    setTimeout(() => {
        store.dispatch(actions.pages.setAll({}));
        store.dispatch(actions.pageInstances.setAll({}));
        store.dispatch(actions.instances.setAll({}));
        store.dispatch(actions.widgets.setAll({}));
        store.dispatch(actions.instancesProps.setAll({}));
        store.dispatch(actions.images.setAll({}));
        store.dispatch(
            actions.datasets.setAll({
                dataset: {},
            })
        );
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

export const site = {
    initialState,
    actions,
    reducers,
    selectors,
    endpointsConfigOverrides,
    clearState,
};
