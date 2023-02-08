import { generateActionsForStore } from 'redux-store-generator';
import { campaigns as storeConfig, ICampaignsStore } from '@gdi/stores';

const { initialState } = storeConfig;

const generatedActions = generateActionsForStore<ICampaignsStore>(initialState);

export const actions = {
    ...generatedActions,
};
