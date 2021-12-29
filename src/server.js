require('dotenv').config();
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;//default port
const route = require('./routes/index');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
app.use(bodyParser.json());
// Config database
const db = require('./config/database/database');
// Connect to db
db.connect();
// static file 
app.use(express.static(path.join(__dirname, 'public')));
// Override form default Post in edit.ejs
app.use(methodOverride('_method'))

// Middleware xử lý dữ liệu từ form 
app.use(express.urlencoded({
    extended: true,
}));
// Xử lý từ code js
app.use(express.json());
// EJS view
app.use(expressLayouts);
// Thay đổi đường dẫn layout.ejs
app.set('layout', './layouts/layout')
app.set('view engine', 'ejs');
// Tim hieu app.set views
app.set('views', path.join(__dirname, './app/views'));

route(app);

app.listen(port, () => console.log(`listening on port 3000 at http://localhost:${port}`));