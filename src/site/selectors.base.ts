import * as raw from './selectors.raw';
import { createSelector } from 'reselect';

import { set, sortBy, mapValues } from 'shared-base';

export const $i = (state: { site: ISiteStore }) => state.site;

export const $instancesProps = createSelector(
    raw.$rawInstancesProps,
    (instanceProps: Json) => {
        return mapValues(instanceProps, (values: Json) => {
            return Object.keys(values).reduce(
                (output, key) => {
                    set(output, key.replace('_', '.'), values[key]);
                    return output;
                },
                {
                    strings: {},
                    colors: {},
                    extra: {},
                } as Json
            );
        });
    }
);

export const $instances = createSelector(
    raw.$rawInstances,
    raw.$rawWidgets,
    $instancesProps,
    (instances: IWidgetInstances, widgets, instanceProps: Json) => {
        return Object.values(instances)
            .sort(sortBy('order'))
            .map((instance) => {
                const widget = (widgets as any)[instance.widgetId];

                return {
                    ...instance,
                    widget,
                    instanceProps: instanceProps[instance.id],
                };
            });
    }
);

export const $pages = createSelector(raw.$rawPages, (pages) => pages);

export const $siteData = createSelector(
    raw.$rawMeta,
    raw.$rawLocale,
    raw.$rawPages,
    raw.$rawPageInstances,
    raw.$rawPalette,
    raw.$rawImages,
    raw.$rawFonts,
    raw.$rawInstances,
    raw.$rawWidgets,
    raw.$rawInstancesProps,
    raw.$rawDatasets,
    (
        meta,
        locale,
        pages,
        pageInstances,
        palette,
        images,
        fonts,
        widgets,
        instances,
        instancesProps,
        datasets
    ) => {
        return {
            meta,
            locale,
            pages,
            pageInstances,
            palette,
            images,
            fonts,
            widgets,
            instances,
            instancesProps,
            datasets,
        };
    }
);
