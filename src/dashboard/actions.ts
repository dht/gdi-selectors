import { generateActionsForStore } from 'redux-store-generator';
import { dashboard as storeConfig, IDashboardStore } from '@gdi/stores';

const { initialState } = storeConfig;

const generatedActions = generateActionsForStore<IDashboardStore>(initialState);

export const actions = {
    ...generatedActions,
};
