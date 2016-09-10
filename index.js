

module.exports = function(attr, value) {
	if(value instanceof Array) value = value.join(' ')
	attr.value += value
}