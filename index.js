'use strict'
module.exports = r3986
exports.r3986 = r3986

function r3986(plain) {
	return encodeURIComponent(plain)
		.replace(/[!'()*]/g, c => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);
}
