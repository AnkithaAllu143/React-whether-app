import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  const getWeather = async () => {
    if (!city.trim()) {
      setWeather("Please enter a city name.");
      return;
    }

    try {
      const response = await fetch(`https://wttr.in/${city}?format=3`);
      const data = await response.text();
      setWeather(data);
    } catch (error) {
      setWeather("Failed to fetch weather data.");
    }
  };

  return (
    <div className="container">
      <h1>WeatherX 🌦️</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && getWeather()}
      />
      <button onClick={getWeather}>Get Weather</button>
      <div className="weather-info">{weather}</div>
    </div>
  );
}
