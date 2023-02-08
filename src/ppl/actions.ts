import { generateActionsForStore } from 'redux-store-generator';
import { ppl as storeConfig, IPplStore } from '@gdi/stores';

const { initialState } = storeConfig;

const generatedActions = generateActionsForStore<IPplStore>(initialState);

export const actions = {
    ...generatedActions,
};
