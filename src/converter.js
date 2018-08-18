'use strict';

const pako = require('../tools/deflate/pako.min');
const utils = require('./utils');

// Decode the given base64-encoded string to plain xml.
// @see https://about.draw.io/extracting-the-xml-from-mxfiles/
// @see https://github.com/zhanbei/drawio-tools/blob/master/tools/convert.html #decode();
exports.decodeFromBase64String = (base64String) => {
	let data = base64String;
	// Decode the base64-encoded string to compressed binary string.
	data = utils.atob(data);
	// Decode the compressed binary bytes to uncompressed bytes(Unit8Array).
	data = pako.inflateRaw(data);
	// Convert the string bytes to string.
	data = utils.bytesToString(data);
	// Decode the URI component to plain xml.
	data = decodeURIComponent(data);
	return data;
};

// Encode and compress the given raw xml to base64-encoded string.
// @see https://about.draw.io/extracting-the-xml-from-mxfiles/
// @see https://github.com/zhanbei/drawio-tools/blob/master/tools/convert.html #encode();
exports.encodeToBase64String = (xml) => {
	let data = xml;
	data = encodeURIComponent(data);
	data = pako.deflateRaw(data);
	data = utils.bytesToString(data);
	data = utils.btoa(data);
	return data;
};
