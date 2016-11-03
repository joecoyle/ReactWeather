var axios = require('axios');

const OWM_URL= 'http://api.openweathermap.org/data/2.5/weather?&appid=7bfdd58511147d1bc5bcd506306c77f0&units=metric';

module.exports = {
  getTemp:function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestURL = `${OWM_URL}&q=${encodedLocation}`;
    console.log(requestURL);
    return axios.get(requestURL).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else{
        return {temp:res.data.main.temp,weather:res.data.weather[0].description};
      }
    },function(err){
      throw new Error(err.response.data.message);
    });
  }
}
