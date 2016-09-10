/**
 * Module dependencies
 */

var styles = require('stylon')


module.exports = function(attr, value) {
	if(typeof value == 'function') value = value()
	if(value instanceof Array) value = value.join(' ')
	else if(typeof value === 'object') value = styles(value)
	attr.value += value
}