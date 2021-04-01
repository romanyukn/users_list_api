import axios from 'axios';

async function getUsers(page) {
  try {
    const res = await axios.get(`https://reqres.in/api/users?page=${page}`);
    return res;
  }
  catch(err) {
    console.log(err);
  }
}

export default getUsers;
