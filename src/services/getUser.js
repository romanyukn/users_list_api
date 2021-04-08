import axios from 'axios';

async function getUser(id) {
  try {
    const res = await axios.get(`https://reqres.in/api/users/${id}`);
    return res;
  }
  catch(err) {
    console.log(err);
  }
}

export default getUser;
