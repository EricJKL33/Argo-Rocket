import axios from "axios";

async function postUser(username, password) {
  try {
    const res = await axios.post("http://localhost:3000/user/signin", {
      username: username,
      password: password,
    });
    localStorage.setItem('user-token', res.data.token);
    return res;
  } catch (err) {
    console.log(err);
  }
}

async function getUser(id) {
  try {
    const res = await axios.get(`http://localhost:3000/user/username/${id}`);
    return res.data.username;
  } catch (err) {
    console.log(err);
  }
}

async function getRockets() {
  try {
    return await axios.get("http://localhost:3000/rocket");
  } catch (err) {
    console.log(err);
  }
}

export default {
  postUser,
  getRockets,
  getUser,
};
