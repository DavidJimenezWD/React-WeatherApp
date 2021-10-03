import { getCityWheather } from './getCityWheather';

export const handleSearch = async (city, setWeatherDay, setCity) => {
  const element = document.querySelector('#hidden-menu');
  element.classList.remove('look');

  const datos = await getCityWheather(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=b2a3e9305b0938d83f5f0e7dc6dde928`
  );

  setCity(datos.city.name);
  setWeatherDay(datos);
};
