const helloRouter = require('./hello.js');
const siteRouter = require('./site.js');
const signupRouter = require('./signup');

const route = (app) => {
    app.use('/signup', signupRouter);
    app.use('/hello', helloRouter);
    app.use('/', siteRouter);
}
module.exports = route;