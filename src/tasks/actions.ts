import { generateActionsForStore } from 'redux-store-generator';
import { tasks as storeConfig, ITasksStore } from '@gdi/stores';

const { initialState } = storeConfig;

const generatedActions = generateActionsForStore<ITasksStore>(initialState);

export const actions = {
    ...generatedActions,
};
