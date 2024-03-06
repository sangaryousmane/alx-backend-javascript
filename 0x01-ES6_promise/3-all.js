import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto, createUser])
    .then((res) => {
        console.log(`${res.body} ${res.firstName} ${res.lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
