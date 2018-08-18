'use strict';

// @see https://github.com/nodejs/node/issues/3462
exports.btoa = (str) => {
	// if (Buffer.byteLength(str) !== str.length)
	// 	throw new Error('bad string!');
	return new Buffer(str, 'binary').toString('base64');
};

// @see exports.btoa();
exports.atob = (str) => {
	// if (Buffer.byteLength(str) !== str.length)
	// 	throw new Error('bad string!');
	return new Buffer(str, 'base64').toString('binary');
};

// Convert uint8Array to binary string.
/*
// @see https://github.com/zhanbei/drawio-tools/blob/master/tools/convert.html #bytesToString();
function bytesToString(arr) {
	var str = '';
	for (var i = 0; i < arr.length; i++) {
		str += String.fromCharCode(arr[i]);
	}
	return str;
}
*/
// @see https://stackoverflow.com/questions/20281986/how-to-convert-an-array-of-bytes-into-string-with-node-js/20282065
exports.bytesToString = (bytes) => new Buffer(bytes).toString('binary');
