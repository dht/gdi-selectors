import { IKnowledgeStore } from '@gdi/stores';
import { createSelector } from 'reselect';

export const $i = (state: { knowledge: IKnowledgeStore }) => state.knowledge;
const $n = (): null => null;
const $o = (): void => {};

export const $rawKnowledgeState = createSelector($i, (state: IKnowledgeStore) => state.appStateKnowledge); // prettier-ignore
export const $rawLinkCategories = createSelector($i, (state: IKnowledgeStore) => state.linkCategories); // prettier-ignore
export const $rawLinks = createSelector($i, (state: IKnowledgeStore) => state.links); // prettier-ignore
