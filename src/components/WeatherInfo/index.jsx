import './index.scss';

export default function WeatherInfo({ weather }) {
  return (
    <div className="weather-info">

      <h2 className="city-name">{weather.name}</h2>

      <div className="weather-main">

        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          alt=""
        />

        <p className="weather-temp">{Math.round(weather.main.temp)}°C</p>

      </div>

      <p className="weather-description">{weather.weather[0].description}</p>

      <div className="weather-details">
        <p className="weather-detail">Sensação: {Math.round(weather.main.feels_like)}°C</p>
        <p className="weather-detail">Umidade: {weather.main.humidity}%</p>
        <p className="weather-detail">Pressão: {weather.main.pressure} hPa</p>
      </div>
    </div>
  );
}
