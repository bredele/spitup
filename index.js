/**
 * Module dependencies
 */

var styles = require('stylon')


/**
 * Expose 'spitup'
 */

module.exports = spitup


/**
 * Append value to attribute.
 *
 * 
 * @param  {Attribute} attr  
 * @param  {Any} value 
 * @api public     
 */

function spitup(attr, value) {
	attr.value += spitup.transform(value)
}


/**
 * Transform value.
 * 
 * A value can be a primitive (string, boolean, numbers, etc), a function,
 * an array or a simple object.
 * 
 * @param  {String|Function|Array} value 
 * @return {String}
 * @api public       
 */

spitup.transform = function(value) {
	if(typeof value == 'function') value = value()
	if(value instanceof Array) value = value.join(' ')
	else if(typeof value === 'object') value = styles(value)
	return value
}