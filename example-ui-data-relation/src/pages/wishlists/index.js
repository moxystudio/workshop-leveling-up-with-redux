/* eslint-disable prefer-import/prefer-import-over-require */

export default (loadComponent) => [
    {
        path: 'wishlists',
        // @ifdef SYNC_ROUTES
        // Ensure component is required synchronously so that it works with react-hot-loader
        // See: https://github.com/gaearon/react-hot-loader/issues/288#issuecomment-281372266
        component: require('./Wishlists').default,
        // @endif
        getComponent: () => loadComponent(import(/* webpackChunkName: "list" */ './Wishlists')),
    },
];
