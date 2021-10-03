import { useEffect, useState } from 'react';
import { handleLocation } from './helpers/handleLocation';
import { AsideSearch } from './components/AsideSearch';
import { AsideLeft } from './components/AsideLeft';
import { PrincipalContent } from './components/PrincipalContent';
import './style.css';

export const WheaterApp = () => {
  const [city, setCity] = useState('');
  const [weatherDay, setWeatherDay] = useState({});
  /* const [wheaterFiveDays, setWeatherFiveDays] = useState([]); */

  useEffect(() => {
    handleLocation(setWeatherDay, setCity);
  }, []);

  return (
    <>
      <div className="container-flex">
        <AsideSearch
          city={city}
          setWeatherDay={setWeatherDay}
          //setWeatherFiveDays={setWeatherFiveDays}
          setCity={setCity}
        />

        <AsideLeft
          city={city}
          setWeatherDay={setWeatherDay}
          // setWeatherFiveDays={setWeatherFiveDays}
          setCity={setCity}
          weatherDay={weatherDay}
        />

        <PrincipalContent weatherDay={weatherDay} />
      </div>
    </>
  );
};
