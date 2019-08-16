import { AsyncStorage } from 'react-native';

let development = true;
let Remote;
if (development) {
  Remote = "http://10.73.59.88"
} else {
  Remote = "https://polkadot.cloud-wave.cn";
}

const getToken = async () => {
  let userToken = await AsyncStorage.getItem('user-token');
  return userToken;
}

const fetchGet = async (url) => {
  try {
    let res = await fetch(url, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + getToken()
      }
    });
    let result = await res.json();
    return result;
  } catch (err) {
    return err.toString()
  }
}

const fetchPost = async (url, data) => {
  console.log("data", data)
  try {
    let res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + getToken(),
      }
    });
    let result = await res.json();
    return result;
  } catch (err) {
    return err.toString()
  }
}

const fetchDelete = async (url) => {
  try {
    let res = await fetch(url, {
      method: "DELETE",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + getToken()
      }
    });
    let result = await res.json();
    return result;
  } catch (err) {
    return err.toString()
  }
}


const request = (method, url, body) => {
  switch (method) {
    case "GET":
      return fetchGet(Remote + url);
    case "POST":
      return fetchPost(Remote + url, body);
    case "DELETE":
      return fetchDelete(Remote + url);
    default:
      return "调用方法不符合http请求"
  }
}

export default request;