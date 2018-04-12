import { AsyncStorage } from 'react-native';

const URL = "https://stanitech.dk/jwtBackend";

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

  loggedIn = async () => {
    const loggedIn = await this.getToken() != null;
    return loggedIn;
  }

  logout = () => {
    AsyncStorage.removeItem("jwtToken");
  }

  login = async (user, pass) => {
    const options = this.makeFetchOptions("POST", { username: user, password: pass });
    await fetch(URL + "/api/login", options, true)
      .then(handleHttpErrors)
      .then(res => {
        this.setToken(res.token)
      })
      .catch(function (error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
        // ADD THIS THROW error
        throw error;
      });

  }

  fetchData = () => {
    const options = this.makeFetchOptions("GET");
    return fetch(URL + "/api/info/swapi/people", options).then(handleHttpErrors);
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
