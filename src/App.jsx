import { useRef, useState } from "react";
import axios from "axios";
import "./App.scss";
import WeatherInfo from "./components/WeatherInfo";
import WeatherInfo5Days from "./components/WeatherInfo5Days";

function App() {
  const [weather, setWeather] = useState({});
  const [weather5Days, setWeather5Days] = useState({});

  const inputRef = useRef();

  const searchCity = async () => {
    const city = inputRef.current.value;

    const apiKey = "c9ff1de9692ce618d4d094e39841e058";

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`;
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`;

    const apiInfo = await axios.get(apiUrl);

    const apiInfo5Days = await axios.get(url5Days);

    setWeather(apiInfo.data);
    setWeather5Days(apiInfo5Days.data);
  };

  return (
    <main className="app">
      <h1 className="app-title">
        Weather<span>Now</span>
      </h1>

      <div className="app-search">
        <input
          className="app-input"
          ref={inputRef}
          type="text"
          placeholder="Digite o nome da cidade"
        />
        <button className="app-button" onClick={searchCity}>
          Buscar
        </button>
      </div>

      {weather && weather.weather && weather.main ? (
        <WeatherInfo weather={weather} />
      ) : null}

      {weather5Days && weather5Days.list ? (
        <WeatherInfo5Days weather5Days={weather5Days} />
      ) : null}
    </main>
  );
}

export default App;
