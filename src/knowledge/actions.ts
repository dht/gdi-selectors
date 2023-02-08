import { generateActionsForStore } from 'redux-store-generator';
import { knowledge as storeConfig, IKnowledgeStore } from '@gdi/stores';

const { initialState } = storeConfig;

const generatedActions = generateActionsForStore<IKnowledgeStore>(initialState);

export const actions = {
    ...generatedActions,
};
