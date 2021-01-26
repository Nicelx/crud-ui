
const checkAge = age => {
	if (!/^[0-9]+$/.test(age)) {
		alert('age must be the number');
		return false
	} 
	if (age > 160) {
		alert('Are you immortal??')
		return false
	}
	return true
}


const checkEmail = email => {
	const regex = /^[^@]+@[^@]+\.[a-zа-я]{1,7}$/
	return regex.test(email)
}


const validate = (obj) => {
	for (let key in obj) {
		if (obj[key] === '') {
			alert('fields must be filled!')
			return false
		}
	}

	if (!checkEmail(obj.email)) {
		alert('email must be valid!!')
		return false
	}

	if (!checkAge(obj.age)) {
		return false
	}

	return true
}



export default validate