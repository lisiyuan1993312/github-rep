const express = require('express')
const app = express()
const repositoriesRoutes = require('./routes/repositoriesRoute')
app.use('/repositories', repositoriesRoutes)
const port = process.env.PORT || 8000
app.listen(port, () => console.log(`server listening on port ${port}`))

module.exports = app;