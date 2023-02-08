import { generateReducersForStore } from 'redux-store-generator';
import { mixer as storeConfig, IMixerStore } from '@gdi/stores';
import { actions } from './actions';
import { selectors } from './selectors.index';
import { mapValues } from '../_utils/map';

const { initialState, api } = storeConfig;

export const reducers = generateReducersForStore<IMixerStore>(initialState);

export const clearState = (store: any) => {
    setTimeout(() => {
        store.dispatch(actions.libraryWidgets.setAll({}));
        store.dispatch(actions.libraryImages.setAll({}));
        store.dispatch(actions.libraryPages.setAll({}));
        store.dispatch(actions.libraryPageInstances.setAll({}));
        store.dispatch(actions.libraryInstances.setAll({}));
        store.dispatch(actions.libraryInstancesProps.setAll({}));
        store.dispatch(actions.libraryPalettes.setAll({}));
        store.dispatch(actions.libraryTypography.setAll({}));
        store.dispatch(
            actions.libraryDatasets.setAll({
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

export const mixer = {
    initialState,
    actions,
    reducers,
    selectors,
    endpointsConfigOverrides,
    clearState,
};
