﻿const express = require('express');
const path = require('path');
const fs = require('fs');

const { logLineAsync } = require('../../utils/utils');

const webserver = express();

const port = 4083;
const logFN = path.join(__dirname, '_server.log');

webserver.get('/getdataasync', (req, res) => { 
    logLineAsync(logFN,"getdataasync called");

    var readStream=fs.createReadStream( path.resolve(__dirname,"../site_football/stats.json") );
    readStream.pipe(res);
});

webserver.listen(port);
logLineAsync(logFN,"web server running on port "+port);
