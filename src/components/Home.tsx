import { useState } from 'react';
import darkIcon from '../assets/icon-moon.svg'
import searchIcon from '../assets/icon-search.svg'
import { searchProfile } from '../services/gitHubAPI';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

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
  twitter_username: string,
  location: string,
  blog: string
  company: string
  html_url: string

}

export const Home = () => {

  const [inputValue, setInputValue] = useState('')
  const [profileData, setProfileData] = useState<ProfileType>({})

    const { theme, toggleTheme } = useContext(ThemeContext)

  const handleButtonSearch = async () => {

    try {
      const profileResult = await searchProfile(inputValue)
      setProfileData(profileResult)
      console.log(profileData)
    } catch (err) {
      console.log('Problema na busca', err.message)
    }



  }


  return (
    <main className="bg-neutral-100">
      <header className='flex justify-between m-3 p-2'>
        <h1 className='text-3xl text-black font-bold'>devfinder</h1>
        <p className='flex gap-2 font-bold text-neutral-500 text-[20px] items-center'>Dark <span><img src={darkIcon} alt="" /></span></p>
      </header>

      <div className='flex justify-baseline w-auto gap-3 bg-neutral-0 m-3 p-4 rounded-[12px]'>
        <img src={searchIcon} alt="search icon" />
        <input type="text" placeholder='Search Github username...'
          className='text-neutral-700'
          onChange={({ target }) => setInputValue(target.value)}
        />
        <button className='bg-blue-500 '
          onClick={handleButtonSearch}
        >search</button>
      </div>

      <section className='bg-neutral-0 m-3 rounded-[12px]'>
        <div className='flex items-center gap-4 bg-neutral-0'>
          <img src={profileData.avatar_url} alt="imagem de perfil github"
            className='w-20 rounded-full'
          />
          <div>
            <h2 className='text-2xl text-black font-bold'>{profileData.name}</h2>
            <a href={profileData.html_url}><p className='text-blue-500'>@{profileData.login}</p></a>
            <p className='text-neutral-600'>
             {new Date(profileData.created_at).toLocaleDateString('en-GB', {day:'numeric', month: 'short', year: 'numeric'})}
              </p>
          </div>
        </div>
        <p>{profileData.bio}</p>
        <div>
          <div>
            <p>repos</p>
            <p>{profileData.public_repos}</p>
          </div>
          <div>
            <p>Followers</p>
            <p>{profileData.followers}</p>
          </div>
          <div>
            <p>Following</p>
            <p>{profileData.following}</p>
          </div>
        </div>
        <div>
          <p>{profileData.location}</p>
          <p>{profileData.twitter_username}</p>
          <p>{profileData.blog}</p>
          <p>{profileData.company}</p>
        </div>
      </section>
    </main>
  );
};