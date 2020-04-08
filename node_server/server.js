'use strict';

require('newrelic');

const express = require('express');

// Constants
const PORT = 5000;
const HOST = '0.0.0.0';
const SLEEP_MS = 1500;

// App
const app = express();
const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));

app.get('/', function (req, res) {
	// Return current system time
	const time = new Date(Date.now()).toLocaleString();
	
	console.log(`Sleeping ${SLEEP_MS}ms before returning a response..`);

	sleep(SLEEP_MS).then(() => {
		res.send(`Current time: ${time}`);
	});
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
