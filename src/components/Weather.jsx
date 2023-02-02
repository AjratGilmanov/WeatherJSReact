import React from "react";


export default function Weather({
  temp,
  like,
  city,
  country,
  sunrise,
  sunset,
  error,
}) {
  return (
    <div>
      <div>
        {temp && (
          <div>
            <p className="mesto">
              Местонахождение: Город - {city} Страна - {country}
            </p>
            <p className="temp">Температура {Math. round(temp)}</p>
            <p className="like">ощущается как: {Math.round(like)}</p>
            <p className="sunrise">Восход {sunrise}</p>
            <p className="sunset">Закат {sunset}</p>
          </div>
        )}
        <p>{error}</p>
      </div>
    </div>
  );
}
