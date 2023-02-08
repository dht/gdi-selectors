import { generateActionsForStore } from 'redux-store-generator';
import { comments as storeConfig, ICommentsStore } from '@gdi/stores';

const { initialState } = storeConfig;

const generatedActions = generateActionsForStore<ICommentsStore>(initialState);

export const actions = {
    ...generatedActions,
};
