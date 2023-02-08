import { generateActionsForStore } from 'redux-store-generator';
import { leads as storeConfig, ILeadsStore } from '@gdi/stores';

const { initialState } = storeConfig;

const generatedActions = generateActionsForStore<ILeadsStore>(initialState);

export const actions = {
    ...generatedActions,
};
