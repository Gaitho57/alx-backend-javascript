import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [photoResponse, userResponse] = results;
      console.log(photoResponse.body, userResponse.firstName, userResponse.lastName);
    })
    .catch((error) => {
      console.log('Signup system offline'); // In case of an error
    });
}

handleProfileSignup();
