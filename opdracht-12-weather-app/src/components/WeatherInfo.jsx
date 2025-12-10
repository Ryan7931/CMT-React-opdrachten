const WeatherInfo = ({ data }) => {
  const icon = data.weather[0].icon;

  return (
    <div className="bg-white p-4 rounded shadow text-center text-3xl">

      <h2 className="text-4xl font-bold mb-2">{data.name}</h2>

      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weer icoon"
        className="mx-auto"
      />

      <p className="text-xl">🌡️ {Math.floor(data.main.temp)}°C</p>
      <p>Gevoelstemperatuur: {Math.floor(data.main.feels_like)}°C</p>
      <p>Luchtvochtigheid: {data.main.humidity}%</p>
      <p>Wind: {data.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherInfo;
