import { useContext } from "react";
import { themeConfig } from "../contexts/theme";
import { ThemeContext } from "../contexts/ThemeContext";
import darkIcon from '../assets/icon-moon.svg'
import lightIcon from '../assets/icon-sun.svg'

export const Header = () => {

  const { theme, toggleTheme } = useContext(ThemeContext)
  
  return (
    <header className='flex justify-between m-3 p-2 lg:w-3xl lg:mx-auto lg:mt-10'>
      <h1 className={`text-3xl ${themeConfig[theme].layout.titleColor} font-bold`}>devfinder</h1>
      <button
        className='flex gap-2 font-bold text-neutral-300 text-[20px] items-center cursor-pointer'
        onClick={toggleTheme}
      >{theme === 'light' ? 'DARK' : 'LIGHT'}<img src={theme === 'light' ? darkIcon : lightIcon} alt="" /></button>
    </header>
  );
};