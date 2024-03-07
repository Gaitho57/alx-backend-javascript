function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('response instanceof Promise');
    }, 200);
  });
}
getResponseFromAPI()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
export default getResponseFromAPI;
