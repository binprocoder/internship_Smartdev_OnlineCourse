const helloRouter = require('./hello.js');
const siteRouter = require('./site.js');
const signupRouter = require('./signup');
const storeRouter = require('./store');
const adminRouter = require('./admin');

const route = (app) => {
    // Login
    app.use('/signup', signupRouter);
    // Test
    app.use('/hello', helloRouter);
    // Save data json
    app.use('/store',storeRouter);
    // Admin page
    app.use('/admin',adminRouter);
    // Homepage
    app.use('/', siteRouter);
}
module.exports = route;