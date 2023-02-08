import { generateActionsForStore } from 'redux-store-generator';
import { devtools as storeConfig, IDevtoolsStore } from '@gdi/stores';

const { initialState } = storeConfig;

const generatedActions = generateActionsForStore<IDevtoolsStore>(initialState);

export const actions = {
    ...generatedActions,
};
