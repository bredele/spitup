

module.exports = function(attr, value) {
	if(typeof value == 'function') value = value()
	if(value instanceof Array) value = value.join(' ')
	attr.value += value
}