function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve({ status: 200, body: 'Success' });
      } else {
        reject(new Error('The fake API is not working currently'));
      }
    }, 2000);
  });
}

getFullResponseFromAPI(true)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error.message);
  });

getFullResponseFromAPI(false)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error.message);
  });
