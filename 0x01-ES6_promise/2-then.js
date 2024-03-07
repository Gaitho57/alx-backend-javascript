function handleResponseFromAPI(promise) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({status: 200, body: success});
			reject(new Error());
		},2000});
}
handleResponseFromAPI(promise)

.then((response) => {
	console.log(response);
}
.catch ((error) => {
	console.log('Rejected:', error); // Logging the empty Error object
  });
export default handleResponseFromAPI(promise);
