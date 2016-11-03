var React = require ('react');
var WeatherForm = require ('WeatherForm');
var WeatherMessage = require ('WeatherMessage');
var OpenWeatherMap = require ('OpenWeatherMap');
var ErrorModal = require ('ErrorModal');

var Weather = React.createClass ({
  componentWillReceiveProps: function (newProps){
    var location = newProps.location.query.location;
    if (location && location.length>0){
      this.handleSearch(location);
      window.location.hash='#/';
    }
  },
  handleSearch: function(location) {
    var that = this;
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined,
      weather: undefined
    });
    OpenWeatherMap.getTemp(location).then(function({temp,weather}){
      that.setState({
        location:location,
        temp:temp,
        weather:weather,
        isLoading:false
      });

    },function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });

  },
  getInitialState: function () {
    return {isLoading:false}
  },
  componentDidMount: function(){
    var location = this.props.location.query.location;
    if (location && location.length>0){
      this.handleSearch(location);
      window.location.hash='#/';
    }
  },
  render: function (){
    var {isLoading, temp, location, weather, errorMessage} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if (temp && location && weather) {
        return <WeatherMessage temp={temp} location={location} weather={weather}/>;
      }
    }

    function renderError(){
      if (typeof errorMessage==='string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
      }


    return (
      <div>
        <h1 className="page-title text-center">Get the Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>

    );
  }
});

module.exports = Weather;
