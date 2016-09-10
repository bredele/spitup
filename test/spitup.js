/**
 * Test dependencies
 */

var spitup = require('..')
var tape = require('tape')

tape('should append string to attribute', test => {
	test.plan(1)
	var el = append('class', 'hello world')
	test.equal(el.getAttribute('class'), 'hello world')
})


tape('should append primitives to attribute', test => {
	test.plan(1)
	var el = append('class', 'hello world', 2, true)
	test.equal(el.getAttribute('class'), 'hello world2true')
})


tape('should append array to attribute', test => {
	test.plan(1)
	var el = append('class', ['how','are','you','doing'])
	test.equal(el.getAttribute('class'), 'how are you doing')	
})


tape('should append function to attribute', test => {
	test.plan(1)
	var el = append('class', function() {
		return 'hello world'
	})
	test.equal(el.getAttribute('class'), 'hello world')
})


tape('should serialize and append object to attribute', test => {
	test.plan(1)
	var el = append('style', {
		width: 100 + 'px',
		display: 'block'
	})
	test.equal(el.getAttribute('style'), 'width:100px;display:block;')
})


/**
 * Append value to the class attribute
 * of a newly created element.
 * 
 * @param  {String} name 
 * @return {Element}     
 * @api private
 */

function append(name) {
	var arr = [].slice.call(arguments, 1)
	var div = document.createElement('div')
	var attr = document.createAttribute(name)
	arr.map(function(item) {
		spitup(attr, item)
	})
	div.attributes.setNamedItem(attr)
	return div
}