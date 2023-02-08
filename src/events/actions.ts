import { generateActionsForStore } from 'redux-store-generator';
import { events as storeConfig, IEventsStore } from '@gdi/stores';

const { initialState } = storeConfig;

const generatedActions = generateActionsForStore<IEventsStore>(initialState);

export const actions = {
    ...generatedActions,
};
