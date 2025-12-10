import { useState } from "react";
import WeatherInfo from "./components/WeatherInfo";

const App = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  // >>> HIERZETJEJAPIKEY <<<
  const apiKey = "d16f14e2a243a52cce06bac7ed949d2b";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    const data = await response.json();
    setWeatherData(data);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Voer een stad in"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Zoeken</button>
      </form>

      {weatherData && <WeatherInfo data={weatherData} />}
    </div>
  );
};

export default App;
