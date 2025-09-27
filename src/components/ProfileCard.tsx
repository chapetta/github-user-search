import locationIcon from '../assets/icon-location.svg';
import twitterIcon from '../assets/icon-twitter.svg';
import websiteIcon from '../assets/icon-website.svg';
import companyIcon from '../assets/icon-company.svg';
import { ThemeContext } from '../contexts/ThemeContext';
import { themeConfig } from '../contexts/theme';
import { useContext } from 'react';
import type { ProfileType } from '../pages/Home';

export const ProfileCard = ({profileData}: {profileData: ProfileType}) => {

  const { theme } = useContext(ThemeContext)

    return (
        <section className={`${themeConfig[theme].layout.profileBackgroundColor} m-5 rounded-[12px] shadow-xl p-4 
          lg:w-3xl lg:mx-auto
        `}>
          <div className={`flex items-center gap-4 ${themeConfig[theme].layout.profileBackgroundColor} mb-8`}>
            <img src={profileData.avatar_url} alt="imagem de perfil github" className="w-20 rounded-full" />
            <div>
              <h2 className={`text-2xl ${themeConfig[theme].layout.nameColor} font-bold`}>{profileData.name}</h2>
              <a href={profileData.html_url}>
                <p className={`${themeConfig[theme].layout.loginColor}`}>@{profileData.login}</p>
              </a>
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
              <p className={`font-bold ${themeConfig[theme].layout.statValueColor} text-2xl m-2`}>{profileData.followers}</p>
            </div>
            <div>
              <p className={`${themeConfig[theme].layout.statTitleColor}`}>Following</p>
              <p className={`font-bold ${themeConfig[theme].layout.statValueColor} text-2xl m-2`}>{profileData.following}</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <p className={`flex gap-4 ${themeConfig[theme].layout.location} items-center`}>
              <span>
                <img src={locationIcon} alt="location icon" style={{ filter: themeConfig[theme].layout.iconFilter }} />
              </span>
              {profileData.location || 'Not Available'}
            </p>
            <p className={`flex gap-4 ${themeConfig[theme].layout.location} items-center`}>
              <span>
                <img src={twitterIcon} alt="" style={{ filter: themeConfig[theme].layout.iconFilter }} />
              </span>
              {profileData.twitter_username || 'Not Available'}
            </p>
            <p className={`flex gap-4 ${themeConfig[theme].layout.location} items-center`}>
              <span>
                <img src={websiteIcon} alt="" style={{ filter: themeConfig[theme].layout.iconFilter }} />
              </span>
              {profileData.blog || 'Not Available'}
            </p>
            <p className={`flex gap-4 ${themeConfig[theme].layout.location} items-center`}>
              <span>
                <img src={companyIcon} alt="" style={{ filter: themeConfig[theme].layout.iconFilter }} />
              </span>
              {profileData.company || 'Not Available'}
            </p>
          </div>
        </section>
    );
};