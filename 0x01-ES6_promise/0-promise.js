function getResponseFromAPI() {
	return new Promise((resolve, reject) => {
setTimeout(() => {
	resolve('promise resolved');
}, 200);
});
}
getResponseFromAPI()
.then(response => {
	console.log(response);
})
.catch(error => {
	console.log(error)
})
