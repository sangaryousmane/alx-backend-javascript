import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
 const allPromises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
 
 const results = await Promise.allSettled(allPromises);
 
 return results.map(result => ({
 status: result.status,
 value: result.status === 'fulfilled' ? result.value : result.reason
 })
}
