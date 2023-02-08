import { generateActionsForStore } from 'redux-store-generator';
import { business as storeConfig, IBusinessStore } from '@gdi/stores';

const { initialState } = storeConfig;

const generatedActions = generateActionsForStore<IBusinessStore>(initialState);

export const actions = {
    ...generatedActions,
};
