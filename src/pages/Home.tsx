import { useEffect, useState } from 'react';
import { searchProfile } from '../services/gitHubAPI';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { themeConfig } from '../contexts/theme';
import { Header } from '../components/Header';
import { SearchProfile } from '../components/SearchProfile';
import { ProfileCard } from '../components/ProfileCard';

export type ProfileType = {
  name: string | null;
  login: string;
  id: number;
  bio: string | null;
  avatar_url: string;
  created_at: string;
  followers: number;
  following: number;
  public_repos: number;
  twitter_username: string | null;
  location: string | null;
  blog: string | null;
  company: string | null;
  html_url: string;
};

export const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [profileData, setProfileData] = useState<ProfileType | null>(null);
  const [notFound, setNotFound] = useState(false);

  const { theme } = useContext(ThemeContext);

  const handleButtonSearch = async () => {
    try {
      const profileResult = await searchProfile(inputValue);
      setProfileData(profileResult);
      setNotFound(false)
    } catch (err: any) {
      console.log('Problema na busca', err.message);
      setProfileData(null);
      if (err.status === 404) setNotFound(true); 
    }
  };

  useEffect(() => {
    const defaultValue = async () => {
      try {
        const profileResult = await searchProfile('chapetta');
        setProfileData(profileResult);
        setNotFound(false);
      } catch (err: any) {
        console.log('Problema na busca', err.message);
        setProfileData(null);
        if (err.status === 404) setNotFound(true);
      }
    };
    defaultValue();
  }, []);

  useEffect(() => {
    document.body.className = themeConfig[theme].layout.backgroundColor;
  }, [theme]);

  return (
    <main className={`${themeConfig[theme].layout.backgroundColor}`}>
      <Header />      
      <SearchProfile  setInputValue={ setInputValue} handleButtonSearch={ handleButtonSearch }/>
      {notFound ? (
        <h1 className={`${themeConfig[theme].layout.titleColor} text-3xl text-center font-bold`}>
          No Results found
        </h1>
      ) : profileData ? (
        <ProfileCard profileData={profileData} />
      ) : null}
    </main>
  );
};
