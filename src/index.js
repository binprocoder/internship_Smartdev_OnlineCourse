const express = require('express');
const app = express();
const port = 3000;//default port
const route = require('./routes/index');
const path = require('path');

// static file 
app.use(express.static(path.join(__dirname, 'public')));
// Middleware xử lý dữ liệu từ form 
app.use(express.urlencoded({
    extended: true,
}));
// Xử lý từ code js
app.use(express.json());
// EJS view
app.set('view engine', 'ejs');
// Tim hieu app.set views
app.set('views', path.join(__dirname, './app/views'));

route(app);

app.listen(port, () => console.log(`listening on port 3000 at http://localhost:${port}`));