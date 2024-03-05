export default function concatArrays(array1, array2, string) {
	const a1 = array1
	const a2 = array2
	const s = string
	newArray = [...a1, ...a2, ...s]
	console.log(newArray)
}

