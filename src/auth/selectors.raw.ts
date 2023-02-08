import { createSelector } from 'reselect';
import { IAuthStore } from '@gdi/stores';

export const $i = (state: { auth: IAuthStore }) => state.auth;
const $n = (): null => null;
const $o = (): void => {};

export const $rawAuthState = createSelector($i, (state: IAuthStore) => state.authState); // prettier-ignore
export const $rawMe = createSelector($i, (state: IAuthStore) => state.me); // prettier-ignore
export const $rawUsers = createSelector($i, (state: IAuthStore) => state.users); // prettier-ignore
export const $rawRoles = createSelector($i, (state: IAuthStore) => state.roles); // prettier-ignore
