import axios from 'axios';

async function getUsers(page, perPage) {
  try {
    const res = await axios.get(`https://reqres.in/api/users?per_page=${perPage}&page=${page}`);
    return res;
  }
  catch(err) {
    console.log(err);
  }
}

export default getUsers;
