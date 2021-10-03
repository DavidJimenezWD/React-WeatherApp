import { arrayDays } from '../helpers/arrayDays';
import { arrayMonths } from '../helpers/arrayMonths';
import { handleClick } from '../helpers/handleClick';
import { handleLocation } from '../helpers/handleLocation';

export const AsideLeft = ({ setWeatherDay, setCity, weatherDay, city }) => {
  const { list } = weatherDay;

  return (
    <div className="aside-left">
      <div className="flex-city">
        <button className="btn-city" onClick={handleClick}>
          Search for places
        </button>

        <img
          className="location-icon"
          src="./assets/location.png"
          alt="location"
          onClick={() => handleLocation(setWeatherDay, setCity)}
        />
      </div>
      {list && (
        <div className="flex-info-left">
          <div className="div-img-day">
            <img
              className="img-day"
              alt="icon-weather"
              src={`http://openweathermap.org/img/wn/${list[0].weather[0].icon}@2x.png`}
            />
          </div>

          <p className="temp-day">{parseInt(list[0].main.temp)} ºC </p>

          <p className="weather-state-name">{list[0].weather[0].description}</p>
          <p className="weather-state-date">
            {`Today -  ${arrayDays[new Date(list[0].dt_txt).getDay()]}
          ${new Date().getDate()}
          ${arrayMonths[new Date(list[0].dt_txt).getMonth()]}`}
          </p>

          <div className="flex-city-bottom">
            <img src={'./assets/location2.png'} alt="location-icon" />
            {city && <p className="name-city">{city}</p>}
          </div>
        </div>
      )}
    </div>
  );
};
