/**
 * Module dependencies
 */

var styles = require('stylon')


/**
 * Append value to attribute.
 *
 * A value can be a primitive (string, boolean, numbers, etc), a function,
 * an array or a simple object.
 * 
 * @param  {Attribute} attr  
 * @param  {Any} value 
 * @api public     
 */

module.exports = function(attr, value) {
	if(typeof value == 'function') value = value()
	if(value instanceof Array) value = value.join(' ')
	else if(typeof value === 'object') value = styles(value)
	attr.value += value
}