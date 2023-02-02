import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Forms from "./components/Forms";
import Weather from "./components/Weather";
export default function App() {
  function changeSun(sun) {
    let date = new Date();
    date.setTime(sun);
    let sun_date =
      date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return sun_date;
  }
  const [temp, setTemp] = useState(undefined);
  const [like, setLike] = useState(undefined);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState(undefined);
  const [sunrise, setSunrise] = useState(undefined);
  const [sunset, setSunset] = useState(undefined);
  const [error, setError] = useState(undefined);
  let API_key = "d7c6ba335ae9b4426e2adc910e75b082";
  const gettingWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    if (city) {
      const api_url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`
      );
      const data = await api_url.json();
      console.log(data);
      setLike(data.main.feels_like);
      setTemp(data.main.temp);
      setCity(data.name);
      setCountry(data.sys.country);
      setSunrise(changeSun(data.sys.sunrise));
      setSunset(changeSun(data.sys.sunset));
      setError(undefined);
    } else {
      setTemp(undefined);
      setLike(undefined);
      setCity(undefined);
      setCountry(undefined);
      setSunrise(undefined);
      setSunset(undefined);
      setError("Введите город");
    }
  };

  return (
    <div className="block">
      <Forms gettingWeather={gettingWeather} />
      <Weather
        temp={temp}
        like={like}
        city={city}
        country={country}
        sunrise={sunrise}
        sunset={sunset}
        error={error}
      />
    </div>
  );
}
