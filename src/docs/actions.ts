import { generateActionsForStore } from 'redux-store-generator';
import { docs as storeConfig, IDocsStore } from '@gdi/stores';

const { initialState } = storeConfig;

const generatedActions = generateActionsForStore<IDocsStore>(initialState);

export const actions = {
    ...generatedActions,
};
