const express = require('express');

const userRoute = require('./route');
const docsRoute = require('./docs');

const router = express.Router();

const defaultRoutes = [
    {
        path: '/add',
        route: userRoute,
    },
    {
        path: '/docs',
        route: docsRoute,
    }
];



defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});


module.exports = router;