import { handleClickArrow } from '../helpers/handleClickArrow';
import { handleSearch } from '../helpers/handleSearch';

export const AsideSearch = ({ city, setWeatherDay, setCity }) => {
  const handleInputChange = ({ target }) => {
    setCity(target.value);
  };

  return (
    <div id="hidden-menu" className="aside-left-search">
      <div className="search">
        <div className="flex-search-input">
          <input
            className="inputText"
            type="text"
            onChange={handleInputChange}
          />
          <button
            className="btn btn-outline-primary btnSubmit"
            onClick={() => handleSearch(city, setWeatherDay, setCity)}
          >
            Search
          </button>
        </div>

        <img
          id="arrow-close"
          className="arrow-close"
          src="./assets/arrow.png"
          alt="arrow-close"
          onClick={handleClickArrow}
        />
      </div>
    </div>
  );
};
