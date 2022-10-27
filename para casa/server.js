const express = require('express');
const router = require('../para casa/src/routes')
const app = express();

app.use(express.json())
app.use(router)

app.listen(3435, () => {
    console.log(`API está rodando na porta 3435`)
});