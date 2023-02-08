import { generateReducersForStore } from 'redux-store-generator';
import { studio as storeConfig, IStudioStore } from '@gdi/stores';
import { actions } from './actions';
import { selectors } from './selectors.index';
import { mapValues } from '../_utils/map';

const { initialState, api } = storeConfig;

export const reducers = generateReducersForStore<IStudioStore>(initialState);

export const clearState = (store: any) => {
    setTimeout(() => {
        store.dispatch(actions.studioBoards.setAll({}));
        store.dispatch(actions.studioCameras.setAll({}));
        store.dispatch(actions.studioGrounds.setAll({}));
        store.dispatch(actions.studioExternals.setAll({}));
        store.dispatch(actions.studioLights.setAll({}));
        store.dispatch(actions.studioMicroAnimations.setAll({}));
        store.dispatch(actions.studioPacks.setAll({}));
        store.dispatch(actions.studioParticles.setAll({}));
        store.dispatch(actions.studioSounds.setAll({}));
        store.dispatch(actions.studioSprites.setAll({}));
        store.dispatch(actions.studioVideos.setAll({}));
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

export const studio = {
    initialState,
    actions,
    reducers,
    selectors,
    endpointsConfigOverrides,
    clearState,
};
