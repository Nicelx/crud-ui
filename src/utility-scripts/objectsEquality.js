const objectsEquality = (obj1, obj2) => {
	if (obj1.length !== obj2.length) return false
	let result = true;

	Object.keys(obj1).forEach((property) => {
		if (obj1[property] !== obj2[property]) {
			result = false
		}
	})
	return result
}



export default objectsEquality