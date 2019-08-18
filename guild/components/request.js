import { AsyncStorage } from 'react-native';

let development = true;
let Remote;
if (development) {
  Remote = "http://10.73.48.200
  "
} else {
  Remote = "https://polkadot.cloud-wave.cn";
}

const fetchGet = async (url) => {
  let token = await AsyncStorage.getItem('user-token');
  try {
    let res = await fetch(url, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    });
    let result = await res.json();
    return result;
  } catch (err) {
    return err.toString()
  }
}

const fetchPost = async (url, data) => {
  let token = await AsyncStorage.getItem('user-token');
  try {
    let res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    });
    let result = await res.json();
    return result;
  } catch (err) {
    return err.toString()
  }
}

const fetchImage = async (url, data) => {
  let token = await AsyncStorage.getItem('user-token');
  try {
    let res = await fetch(url, {
      method: "POST",
      body: data,
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + token
      }
    });
    let result = await res.json();
    return result;
  } catch (err) {
    return err.toString()
  }
}

const fetchDelete = async (url) => {
  let token = await AsyncStorage.getItem('user-token');
  try {
    let res = await fetch(url, {
      method: "DELETE",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
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
    case "POST_IMAGE":
      return fetchImage(Remote + url, body);
    case "DELETE":
      return fetchDelete(Remote + url);
    default:
      return "调用方法不符合http请求"
  }
}

export default request;