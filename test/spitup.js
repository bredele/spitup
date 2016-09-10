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
	spitup(attr, str)
	div.attributes.setNamedItem(attr)
	return div
}