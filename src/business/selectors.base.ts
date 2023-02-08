import { IBusinessStore } from '@gdi/stores';
import * as raw from './selectors.raw';

export const $i = (state: { business: IBusinessStore }) => state.business;
