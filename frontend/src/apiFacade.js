var pkg = require('../package.json');
var URL = pkg.config.url;

function handleHttpErrors(res) {
  if (!res.ok) {
    console.log("error");
    throw {message:res.statusText,status:res.status};
  }
  return res.json();
}


class ApiFacade {

    fetchData = () =>{
        const options = this.makeFetchOptions("GET");
        return fetch(URL+"/api/info/user",options).then(handleHttpErrors);
    }

    setToken = (token) => {
        localStorage.setItem('jwtToken', token)
     }
    getToken = () => {
        return localStorage.getItem('jwtToken')
    }
    loggedIn = () => {
        const loggedIn = this.getToken() != null;
        return loggedIn;
    }
    logout = () => {
        localStorage.removeItem("jwtToken");
     }
    
     login = (user, pass) => {
       console.log("this is the url "+URL);
        const options = this.makeFetchOptions("POST",{ username: user, password: pass });
        console.log(options);
        return fetch(URL+"/api/login",options,true)
        .then(handleHttpErrors)
        .then(res=>{this.setToken(res.token)})
    }

  makeFetchOptions = (type, b) => {
    let headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    if(this.loggedIn()){
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