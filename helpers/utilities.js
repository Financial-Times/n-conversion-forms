//Recursively flattens a nested object.
//For example: input: {a:{b:1}}  -> output: {b:1}
const flattenObj = (obj, out={}) => {
	Object.keys(obj).forEach(key => {
		if (typeof obj[key] === 'object') {
			out = flattenObj(obj[key], out) //recursively call for nesteds
		} else {
			out[key] = obj[key]; //direct assign for values
		}
	})
	return out;
};

module.exports = { flattenObj };