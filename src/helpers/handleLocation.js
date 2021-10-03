import { getCityWheather } from './getCityWheather';

export const handleLocation = (setWeatherDay, setCity) => {
  navigator.geolocation.getCurrentPosition(async (position) => {
    const { latitude, longitude } = position.coords;

    const datos = await getCityWheather(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=b2a3e9305b0938d83f5f0e7dc6dde928
      `,
      latitude,
      longitude
    );
    setCity(datos.city.name);
    setWeatherDay(datos);
  });
};
