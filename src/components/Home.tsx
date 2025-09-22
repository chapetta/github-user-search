import darkIcon from '../assets/icon-moon.svg'

export const Home = () => {
  return (
    <main className="bg-blue-300">
      <header className=''>
        <h1>devfinder</h1>
        <p>Dark <span><img src={darkIcon} alt="" /></span></p>
      </header>

      <div>
        <input type="text" placeholder='Search Github username...' />
        <button>search</button>
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