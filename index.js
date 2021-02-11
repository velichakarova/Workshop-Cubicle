const express = require('express');

const config = require('./config/config.js');
const expressConfig = require('./config/express');
const routes = require('./routes');

const app = express();

require('./config/mondoose')(app);
expressConfig(app);
app.use(routes);

app.listen(config.PORT, ()=>
console.log(`Server is running on port ${config.PORT}...`));