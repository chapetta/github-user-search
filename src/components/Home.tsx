import darkIcon from '../assets/icon-moon.svg'
import searchIcon from '../assets/icon-search.svg'

export const Home = () => {
  return (
    <main className="bg-blue-300">
      <header className='flex justify-between m-3 p-2'>
        <h1 className='text-3xl text-black font-bold'>devfinder</h1>
        <p className='flex gap-2 font-bold text-neutral-500 text-[20px] items-center'>Dark <span><img src={darkIcon} alt="" /></span></p>
      </header>

      <div className='flex justify-baseline w-auto gap-3 bg-neutral-0 m-3 p-2 rounded-2xl'>
        <img src={searchIcon} alt="search icon" />
        <input type="text" placeholder='Search Github username...' 
        className='text-neutral-700'
        />
        <button className='bg-blue-500'>search</button>
      </div>

      <section>
        <div>
          <img src="img-api" alt="imagem de perfil github" />
          <h2>Name</h2>
          <p>@name</p>
          <p>joined 25 Jan 2011</p>
        </div>
        <p>Description bio</p>
        <div>
          <div>
            <p>repos</p>
            <p>8</p>
          </div>
          <div>
            <p>Followers</p>
            <p>3938</p>
          </div>
          <div>
            <p>Following</p>
            <p>23</p>
          </div>
        </div>
        <div>
          <p>San fransico</p>
          <p>Not available</p>
          <p>http://github.blog</p>
          <p>@agithub</p>
        </div>
      </section>
    </main>
  );
};