const { version } = require('../../package.json');


const swaggerDef = {
    openapi: '3.0.0',
    info: {
        title: 'E-Commerce webside',
        version,
        license: {
            name: 'MIT',
            url: 'https://github.com/hagopj13/node-express-boilerplate/blob/master/LICENSE',
        },
    },
    servers: [
        {
            url: `http://localhost:${3000}`,
        },
    ],
};

module.exports = swaggerDef;
