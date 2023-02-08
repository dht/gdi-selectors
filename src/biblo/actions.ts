import { generateActionsForStore } from 'redux-store-generator';
import { biblo as storeConfig, IBibloStore } from '@gdi/stores';

const { initialState } = storeConfig;

const generatedActions = generateActionsForStore<IBibloStore>(initialState);

export const actions = {
    ...generatedActions,
};
