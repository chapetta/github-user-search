import { useContext } from 'react';
import searchIcon from '../assets/icon-search.svg';
import { themeConfig } from '../contexts/theme';
import { ThemeContext } from '../contexts/ThemeContext';

type SearchPropType = {
  setInputValue: (value: string) => void;
  handleButtonSearch: () => void;
}

export const SearchProfile = ({ setInputValue, handleButtonSearch }: SearchPropType) => {
  
  const { theme } = useContext(ThemeContext)

    return (
        <div className={`flex items-center gap-3 ${themeConfig[theme].layout.inputBackgroundColor} m-3 p-2 rounded-[12px] shadow-xl mb-8 lg:w-3xl lg:mx-auto `}>
        <img src={searchIcon} alt="search icon" className="w-5 h-5 ml-2" />
        <input
          type="text"
          placeholder="Search Github username..."
          className={`flex-1 min-w-0 p-2 ${themeConfig[theme].layout.inputColor} bg-transparent outline-none`}
          onChange={({ target }) => setInputValue(target.value)}
        />
        <button
          className="bg-blue-500 rounded-md text-neutral-0 px-4 py-2 flex-shrink-0"
          onClick={handleButtonSearch}
        >
          Search
        </button>
      </div>
    );
};