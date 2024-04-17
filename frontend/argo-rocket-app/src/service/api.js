import axios from "axios";

async function postUser(username, password) {
  try {
    const res = await axios.post("http://localhost:3000/user/signin", {
      username: username,
      password: password,
    });
    console.log(res);
    return res;
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
};
