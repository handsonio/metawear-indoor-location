var Bleacon = require('bleacon');
var KalmanFilter = require('kalmanjs').default;
var kalmanFilter = new KalmanFilter({R: 0.01, Q: 3});

Bleacon.on('discover', function(bleacon) {
	console.log('\tRssi update : ' + bleacon.rssi);
	console.log('\tFiltered Rssi update : ' + kalmanFilter.filter(bleacon.rssi));
});

Bleacon.startScanning();