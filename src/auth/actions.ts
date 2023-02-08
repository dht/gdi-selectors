import { generateActionsForStore } from 'redux-store-generator';
import { auth as storeConfig, IAuthStore } from '@gdi/stores';

const { initialState } = storeConfig;

const generatedActions = generateActionsForStore<IAuthStore>(initialState);

export const actions = {
    ...generatedActions,
};
