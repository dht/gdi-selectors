import { createSelector } from 'reselect';
import { sortBy, distinctColors } from 'shared-base';

export const $i = (state: any) => state;
const $n = (): null => null;
const $o = (): void => {};

export const $activeApps = createSelector($i, (state: Json): IActiveApp[] => {
    return Object.values(apps)
        .map((app) => {
            const { id, nodes, isRequired } = app;

            let nodeCount = 0;
            let totalSize = 0;

            nodes.forEach((nodeKey) => {
                const data = state[nodeKey] || {};
                nodeCount += Object.keys(data).length;
                totalSize += calcSize(data);
            });

            const description = '';

            return {
                id,
                title: id,
                nodeCount,
                totalSize,
                description,
                isRequired,
            } as IActiveApp;
        })
        .sort(sortBy('title'))
        .map((activeApp: IActiveApp, index) => {
            const color = distinctColors[index];

            return {
                ...activeApp,
                color,
            };
        });
});

export const $activeAppsStats = createSelector(
    $activeApps,
    (activeApps: IActiveApp[]): IActiveAppsStats => {
        const count = activeApps.length;

        const totalNodeCount = activeApps.reduce((acc, app) => {
            return acc + app.nodeCount;
        }, 0);

        const totalSize = activeApps.reduce((acc, app) => {
            return acc + app.totalSize;
        }, 0);

        return {
            count,
            totalNodeCount,
            totalSize,
        };
    }
);

export const $activeServices = createSelector(
    $i,
    (state: Json): IActiveService[] => {
        return Object.values(services)
            .map((service) => {
                const { id, nodes, isRequired } = service;

                let nodeCount = 0;
                let totalSize = 0;

                nodes.forEach((nodeKey) => {
                    const data = state[nodeKey] || {};
                    nodeCount += Object.keys(data).length;
                    totalSize += calcSize(data);
                });

                const description = '';

                return {
                    id,
                    title: id,
                    nodeCount,
                    totalSize,
                    description,
                    isRequired,
                } as IActiveService;
            })
            .sort(sortBy('title'))
            .map((activeService: any, index) => {
                const color = distinctColors[index];

                return {
                    ...activeService,
                    color,
                };
            });
    }
);

export const $activeServicesStats = createSelector(
    $activeServices,
    (activeServices: IActiveService[]): IActiveServicesStats => {
        const count = activeServices.length;

        const totalNodeCount = activeServices.reduce((acc, service) => {
            return acc + service.nodeCount;
        }, 0);

        const totalSize = activeServices.reduce((acc, service) => {
            return acc + service.totalSize;
        }, 0);

        return {
            count,
            totalNodeCount,
            totalSize,
        };
    }
);

const calcSize = (json: Json) => {
    return JSON.stringify(json).length;
};

type App = {
    id: string;
    nodes: string[];
    isRequired?: boolean;
};

type Service = App;

const apps: Record<string, App> = {
    dashboard: {
        id: 'dashboard',
        nodes: ['dashboard'],
    },
    studio: {
        id: 'studio',
        nodes: ['studio'],
    },
    factory: {
        id: 'factory',
        nodes: ['factory'],
    },
    login: {
        id: 'login',
        nodes: ['auth'],
        isRequired: true,
    },
    comments: {
        id: 'comments',
        nodes: ['comments'],
    },
    campaigns: {
        id: 'campaigns',
        nodes: ['campaigns'],
    },
    leads: {
        id: 'leads',
        nodes: ['leads'],
    },
    mixer: {
        id: 'mixer',
        nodes: ['mixer'],
    },
    settings: {
        id: 'settings',
        nodes: ['settings'],
        isRequired: true,
    },
    biblo: {
        id: 'biblo',
        nodes: ['biblo'],
    },
    carts: {
        id: 'carts',
        nodes: ['carts'],
    },
    deals: {
        id: 'deals',
        nodes: ['deals'],
    },
    devtools: {
        id: 'devtools',
        nodes: ['devtools'],
    },
    docs: {
        id: 'docs',
        nodes: ['docs'],
    },
    events: {
        id: 'events',
        nodes: ['events'],
    },
    knowledge: {
        id: 'knowledge',
        nodes: ['knowledge'],
    },
    money: {
        id: 'money',
        nodes: ['money'],
    },
    orders: {
        id: 'orders',
        nodes: ['orders'],
    },
    ppl: {
        id: 'ppl',
        nodes: ['ppl'],
    },
    products: {
        id: 'products',
        nodes: ['products'],
    },
    rayl: {
        id: 'rayl',
        nodes: ['rayl'],
    },

    soundboard: {
        id: 'soundboard',
        nodes: ['soundboard'],
    },
    source: {
        id: 'source',
        nodes: ['source'],
    },
    tasks: {
        id: 'tasks',
        nodes: ['tasks'],
    },
    things: {
        id: 'things',
        nodes: ['things'],
    },
    voice: {
        id: 'voice',
        nodes: ['voice'],
    },
};

const services: Record<string, Service> = {
    googleSync: {
        id: 'googleSync',
        nodes: ['googleSync'],
        isRequired: false,
    },
    guidance: {
        id: 'guidance',
        nodes: ['guidance'],
        isRequired: false,
    },
    freelancers: {
        id: 'freelancers',
        nodes: ['freelancers'],
        isRequired: false,
    },
    levelUp: {
        id: 'levelUp',
        nodes: ['levelUp'],
        isRequired: false,
    },
    blkr: {
        id: 'blkr',
        nodes: ['blkr'],
        isRequired: false,
    },
};
