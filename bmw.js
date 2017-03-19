/**
 * @author Thassio Victor <tvmcarvalho@gmail.com>
    * @desc Retornar BMW
    * @license MIT
    */

'use strict';

const https = require('https');

const API = 'https://fipe-parallelum.rhcloud.com/api/v1/carros/marcas/7/modelos';

https.get(API, function(res) {
    let bmw = '';

    res.on('data', function(d) {
        bmw += d;
    });

    res.on('end', function() {
        bmw = JSON.parse(bmw);
        console.log(bmw);
    });
});
