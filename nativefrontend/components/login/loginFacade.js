import { AsyncStorage } from 'react-native';

const URL = "https://stanitech.dk/jwtBackend-1.0-SNAPSHOT";

function handleHttpErrors(res) {
  if (!res.ok) {
    throw { message: res.statusText, status: res.status };
  }
  return res.json();
}

class ApiFacade {

  setToken = async (token) => {
    await AsyncStorage.setItem('jwtToken', token)
  }

  getToken = async () => {
    const token = await AsyncStorage.getItem('jwtToken');
    return token;
  }

  loggedIn = () => {
    const loggedIn = this.getToken() != null;
    return loggedIn;
  }

  logout = () => {
    AsyncStorage.removeItem("jwtToken");
  }

  login = async (user, pass) => {
    const options = this.makeFetchOptions("POST", { username: user, password: pass });
    const json = await fetch(URL + "/api/login", options, true)
      .then(handleHttpErrors)
      .then(res => { this.setToken(res.token)})
  }

  fetchData = async () => {
    const options = this.makeFetchOptions("GET");
    const json = await fetch(URL + "/api/info/user", options).then(handleHttpErrors);
    return JSON.stringify(json);
  }

  makeFetchOptions = (type, b) => {
    let headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    if (this.loggedIn()) {
      headers["x-access-token"] = this.getToken();
    }
    return {
      method: type,
      headers,
      body: JSON.stringify(b)
    }
  }
}
const facade = new ApiFacade();
export default facade;
