import { AsyncStorage } from 'react-native';

const URL = require("../../package.json").config.url;

function handleHttpErrors(res) {
  if (!res.ok) {
    throw { message: res.statusText, status: res.status };
  }
  return res.json();
}

class homeFacade {

  getToken = async () => {
    const token = await AsyncStorage.getItem('jwtToken');
    return token;
  }

  loggedIn = async () => {
    const loggedIn = await this.getToken() != null;
    return loggedIn;
  }


  fetchData = async () => {
    const options = await this.makeFetchOptions("GET");
    const res = await fetch(URL + "/api/info/swapi/people", options).then(handleHttpErrors);
    console.log("2 ERROR from async"+ JSON.stringify(res));
    return res;
  }

  makeFetchOptions = async (type, b) => {
    let headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    if ( await this.loggedIn()) {
      headers["x-access-token"] = await this.getToken();
    }
    return {
      method: type,
      headers,
      body: JSON.stringify(b)
    }
  }
}
const facade = new homeFacade();
export default facade;
