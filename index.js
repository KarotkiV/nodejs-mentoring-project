'use strict'

const app = require('./appExp.js');

const port = process.env.PORT || 9000;
console.log(app);
app.listen(port, () => {console.log(`App listening on port ${port}!`)});