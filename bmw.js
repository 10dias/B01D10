/**
 * @author Thassio Victor <tvmcarvalho@gmail.com>
    * @desc Retornar BMW
    * @license MIT
    */

'use strict';

const https = require('https');

const API = 'https://fipe-parallelum.rhcloud.com/api/v1/carros/marcas/7/modelos';

https.get(API, function(res) {
    console.log(res);
});
