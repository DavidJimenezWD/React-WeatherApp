import { ProgressBar } from 'react-bootstrap';
import { arrayDays } from '../helpers/arrayDays';

export const PrincipalContent = ({ weatherDay }) => {
  const { list } = weatherDay;
  let days;

  if (list) {
    days = [list[10], list[20], list[30], list[38]];
  }

  return (
    <div className="principal-content">
      {list && (
        <>
          <div className="principal-content-days">
            {days.map((day) => (
              <div key={day.dt} className="div-day">
                <p>{arrayDays[new Date(day.dt_txt).getDay()]}</p>
                <img
                  className="weather-state"
                  alt="icon-weather"
                  src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                />
                <p>
                  {parseInt(day.main.temp_max)} ºc &nbsp;&nbsp;
                  {parseInt(day.main.temp_min)}
                  ºc
                </p>
              </div>
            ))}
          </div>
          <div className="principal-content-info">
            <h3 className="today-highlight">Today's HighLight</h3>
          </div>

          <div className="principal-content-info2">
            <div className="wind-humidi">
              <p className="titles">Wind Status</p>
              <p>{parseInt(list[0].wind.speed)} KM </p>
              <img
                className="wind-icon"
                src="./assets/wind.png"
                alt="wind-icon"
              />
            </div>
            <div className="wind-humidi">
              <p className="titles">Humidicity</p>
              <p className="text-inf"> {list[0].main.humidity} </p> %
              <ProgressBar
                className="bar-progress"
                now={list[0].main.humidity}
              />
            </div>
          </div>

          <div className="principal-content-info3">
            <div className="air-visibi">
              <p className="titles">Visibility</p>
              <p className="text-inf">{parseInt(list[0].visibility)}</p> miles
            </div>
            <div className="air-visibi">
              <p className="titles">Air Pressure</p>
              <p className="text-inf">{parseInt(list[0].main.pressure)}</p>
              mb
            </div>
          </div>
        </>
      )}
    </div>
  );
};
