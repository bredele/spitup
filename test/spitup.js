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


tape('should append array to attribute', test => {
	test.plan(1)
	var el = append(['how','are','you','doing'])
	test.equal(el.getAttribute('class'), 'how are you doing')	
})


tape('should append function to attribute', test => {
	test.plan(1)
	var el = append(function() {
		return 'hello world'
	})
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
	for(var i = 0, l = arguments.length; i < l; i++) {
		spitup(attr, arguments[i])
	}
	div.attributes.setNamedItem(attr)
	return div
}