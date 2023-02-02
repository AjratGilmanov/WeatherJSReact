import React from "react";
export default function Forms({ gettingWeather }) {
  return (
    <div>
      <form onSubmit={gettingWeather}>
        <input className="input" type="text" name="city" placeholder="Город" />
        <button className="button" type="sybmit">
          Получить погоду
        </button>
      </form>
    </div>
  );
}
