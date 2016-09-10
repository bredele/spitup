/**
 * Test dependencies
 */

var spitup = require('..')
var tape = require('tape')

tape('should append string to attribute', test => {
	test.plan(1)
	var el = append('hello world')
	test.equal(el.getAttribute('class'), 'hello world')
})


tape('should append primitives to attribute', test => {
	test.plan(1)
	var el = append('hello world', 2, true)
	test.equal(el.getAttribute('class'), 'hello world2true')
})


/**
 * Append value to the class attribute
 * of a newly created element.
 * 
 * @param  {Any} str 
 * @return {Element}     
 * @api private
 */

function append(str) {
	var div = document.createElement('div')
	var attr = document.createAttribute('class')
	for(var i = 0, l = arguments.length; i < l; i++) {
		spitup(attr, arguments[i])
	}
	div.attributes.setNamedItem(attr)
	return div
}