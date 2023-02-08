import { generateActionsForStore } from 'redux-store-generator';
import { money as storeConfig, IMoneyStore } from '@gdi/stores';

const { initialState } = storeConfig;

const generatedActions = generateActionsForStore<IMoneyStore>(initialState);

export const actions = {
    ...generatedActions,
};
