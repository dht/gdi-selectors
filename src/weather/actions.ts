import { generateActionsForStore } from 'redux-store-generator';
import { weather as storeConfig, IWeatherStore } from '@gdi/stores';

const { initialState } = storeConfig;

const generatedActions = generateActionsForStore<IWeatherStore>(initialState);

export const actions = {
    ...generatedActions,
};
