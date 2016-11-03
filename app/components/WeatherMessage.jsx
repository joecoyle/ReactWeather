var React = require ('react');

var WeatherMessage = (props) => {
  var t = Math.round(props.temp);
  return (
    <div>
      <h2 className="text-center">It is {t}°C with {props.weather} in {props.location}</h2>
    </div>

  );
};
module.exports = WeatherMessage;
