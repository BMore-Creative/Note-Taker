const express = require('express');
const apiRoutes = require('./apiRoutes')
const htmlRoutes = require('./htmlRoutes')

const app = express();

const PORT = process.env.PORT || 8080;

app.use

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', htmlRoutes)
app.use('/api', apiRoutes)

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});