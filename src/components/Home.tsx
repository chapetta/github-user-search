import { useEffect, useState } from 'react';
import darkIcon from '../assets/icon-moon.svg'
import searchIcon from '../assets/icon-search.svg'
import { searchProfile } from '../services/gitHubAPI';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import locationIcon from '../assets/icon-location.svg'
import twitterIcon from '../assets/icon-twitter.svg'
import websiteIcon from '../assets/icon-website.svg'
import companyIcon from '../assets/icon-company.svg'
import lightIcon from '../assets/icon-sun.svg'
import { themeConfig } from '../contexts/theme';

type ProfileType = {
  name: string,
  login: string,
  id: number,
  bio: string,
  avatar_url: string,
  created_at: Date,
  followers: number,
  following: number,
  public_repos: number,
  twitter_username: string | null,
  location: string,
  blog: string
  company: string
  html_url: string

}

const emptyProfile: ProfileType = {
  name: '',
  login: '',
  id: 0,
  bio: '',
  avatar_url: '',
  created_at: new Date(),
  followers: 0,
  following: 0,
  public_repos: 0,
  twitter_username: null,
  location: '',
  blog: '',
  company: '',
  html_url: '',
};

export const Home = () => {

  const [inputValue, setInputValue] = useState('')
  const [profileData, setProfileData] = useState<ProfileType>(emptyProfile)

  const { theme, toggleTheme } = useContext(ThemeContext)

  const handleButtonSearch = async () => {

    try {
      const profileResult = await searchProfile(inputValue)
      console.log(profileResult)
      setProfileData(profileResult)
    } catch (err) {
      console.log('Problema na busca', err.message)
    }

  }

  useEffect(() => {
    const defaultValue = async () => {
      try {
        const profileResult = await searchProfile('chapetta')
        setProfileData(profileResult)
      } catch (err) {
        console.log('Problema na busca', err.message)
      }
    }

    defaultValue()
  }, [])

  useEffect(() => {
    document.body.className = themeConfig[theme].layout.backgroundColor;
  }, [theme]);


  return (
    <main className={`${themeConfig[theme].layout.backgroundColor}`}>
      <header className='flex justify-between m-3 p-2'>
        <h1 className={`text-3xl ${themeConfig[theme].layout.titleColor} font-bold`}>devfinder</h1>
        <button
          className='flex gap-2 font-bold text-neutral-300 text-[20px] items-center cursor-pointer'
          onClick={toggleTheme}
          >{theme === 'light' ? 'DARK' : 'LIGHT'}<img src={theme === 'light' ? darkIcon : lightIcon} alt="" /></button>
      </header>

      <div className={`flex items-center gap-3 ${themeConfig[theme].layout.inputBackgroundColor} m-3 p-2 rounded-[12px] shadow-xl mb-8`}>
        <img src={searchIcon} alt="search icon" className='w-5 h-5 ml-2' />
        <input type="text" placeholder='Search Github username...'
          className={`flex-1 min-w-0 p-2 ${themeConfig[theme].layout.inputColor} bg-transparent outline-none`}
          onChange={({ target }) => setInputValue(target.value)}
        />
        <button className='bg-blue-500 rounded-md text-neutral-0 px-4 py-2 flex-shrink-0'
          onClick={handleButtonSearch}
        >Search</button>
      </div>
      {profileData?.name === null ? (
        <h1 className={`${themeConfig[theme].layout.titleColor} text-3xl text-center font-bold`}>No Results found</h1>
      ) : (
        <section className={`${themeConfig[theme].layout.profileBackgroundColor} m-5 rounded-[12px]  shadow-xl p-4`}>
          <div className={`flex items-center gap-4 ${themeConfig[theme].layout.profileBackgroundColor} mb-8`}>
            <img src={profileData.avatar_url} alt="imagem de perfil github"
              className='w-20 rounded-full'
            />
            <div>
              <h2 className={`text-2xl ${themeConfig[theme].layout.nameColor} font-bold`}>{profileData.name}</h2>
              <a href={profileData.html_url}><p className={`${themeConfig[theme].layout.loginColor}`}>@{profileData.login}</p></a>
              <p className={`${themeConfig[theme].layout.dateColor}`}>
                {new Date(profileData.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
              </p>
            </div>
          </div>
          <p className={`${themeConfig[theme].layout.bioColor}`}>{profileData.bio}</p>
          <div className={`p-6 ${themeConfig[theme].layout.statsBackgroundColor} rounded-2xl my-6 mx-2 flex flex-col justify-around`}>
            <div>
              <p className={`${themeConfig[theme].layout.statTitleColor}`}>Repos</p>
              <p className={`font-bold ${themeConfig[theme].layout.statValueColor} text-2xl m-2`}>{profileData.public_repos}</p>
            </div>
            <div>
              <p className={`${themeConfig[theme].layout.statTitleColor}`}>Followers</p>
              <p className={`font-bold ${themeConfig[theme].layout.statValueColor} text-2xl m-2`}> {profileData.followers}</p>
            </div>
            <div>
              <p className={`${themeConfig[theme].layout.statTitleColor}`}>Following</p>
              <p className={`font-bold ${themeConfig[theme].layout.statValueColor} text-2xl m-2`}>{profileData.following}</p>
            </div>
          </div>
          <div className='flex flex-col gap-6'>
            <p className={`flex gap-4 ${themeConfig[theme].layout.location} items-center`}><span><img src={locationIcon} alt="location icon" style={{filter: themeConfig[theme].layout.iconFilter}} /></span>{profileData.location}</p>
            <p className={`flex gap-4 ${themeConfig[theme].layout.location} items-center`}><span><img src={twitterIcon} alt="" style={{filter: themeConfig[theme].layout.iconFilter}} /></span>{profileData.twitter_username ? profileData.twitter_username : 'Not Available'}</p>
            <p className={`flex gap-4 ${themeConfig[theme].layout.location} items-center`}><span><img src={websiteIcon} alt="" style={{filter: themeConfig[theme].layout.iconFilter}} /></span>{profileData.blog}</p>
            <p className={`flex gap-4 ${themeConfig[theme].layout.location} items-center`}><span><img src={companyIcon} alt="" style={{filter: themeConfig[theme].layout.iconFilter}} /></span>{profileData.company ? profileData.company : 'Not Available'}</p>
          </div>
        </section >
      )}
    </main >
  );
};