'use strict';

const router = require('express').Router();

router.get('/', (request, response, next) => {
    response.status(200).send("HashTek Solutions-Training");
});

module.exports = router;
