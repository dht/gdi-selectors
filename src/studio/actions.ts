import { generateActionsForStore } from 'redux-store-generator';
import { studio as storeConfig, IStudioStore } from '@gdi/stores';

const { initialState } = storeConfig;

const generatedActions = generateActionsForStore<IStudioStore>(initialState);

export const actions = {
    ...generatedActions,
};
