import './index.scss'

function WeatherInfo5Days({ weather5Days }) {
    if (!weather5Days || !weather5Days.list) return null;

    let dailyForecast = {};

    for (let forecast of weather5Days.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long" });

        if (!dailyForecast[date]){
            dailyForecast[date] = forecast;
        }
    };

    const next5Days = Object.values(dailyForecast).slice(1, 6);

    function convertDate(date) {
        return new Date(date * 1000).toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long" });
    }

    return (
        <div className="weather-info-5-days">
            {next5Days.map(forecast => (
                <div key={forecast.dt} className="weather-info-5-days-item">
                    <p>{convertDate(forecast.dt)}</p>
                    <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt={forecast.weather[0].description} />
                    <p>{forecast.weather[0].description}</p>
                    <p>{Math.round(forecast.main.temp_min)}°C min / {Math.round(forecast.main.temp_max)}°C max</p>
                </div>
            ))}
        </div>
    );
};

export default WeatherInfo5Days;