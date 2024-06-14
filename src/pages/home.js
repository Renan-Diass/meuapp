import React, { useState } from 'react';
import { deezerAxiosData } from '../api/deezerAxiosData'; // Corrigido o nome do arquivo
import './home.css';
import deezerLogo from '../img/deezer.png'; // Corrigido o nome do arquivo

function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [axiosResult, setAxiosResult] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() !== '' && password.trim() !== '') {
      localStorage.setItem('username', username);
      setIsLoggedIn(true);
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  const fetchDeezerData = async (query) => {
    try {
      const data = await deezerAxiosData(query);
      console.log('Data returned by Deezer API:', data);
      if (data && data.length > 0) {
        setAxiosResult(data[0]);
      } else {
        setAxiosResult(null);
      }
    } catch (error) {
      console.error('Error fetching data from Deezer API:', error);
      setAxiosResult(null);
    }
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    fetchDeezerData(searchQuery); // chama a função de busca com a consulta atual
  };

  if (!isLoggedIn) {
    return (
      <div className="overlay">
        <div className="login-container">
          <h2 className="login-title">LOGIN</h2>
          <form onSubmit={handleLogin}>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="home-container">
      <h2 className="home-title">Welcome {username !== '' ? username : 'Usuário'}</h2>
      <p className="home-description">Here are one APIs to browse:</p>
      <div className="card-container">
        <div className="card" style={{ width: '18rem' }}>
          <img className="card-img-top" src={deezerLogo} alt="Deezer API" />
          <div className="card-body">
            <h5 className="card-title">Deezer API</h5>
            <h5 className="card-description">API accessed using Axios</h5>
            <form onSubmit={handleSubmitSearch}>
              <div className='form-group'>
                <input type="text" className="form-control" placeholder="Search Artist" value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}>
                </input>
              </div>
              <button type="submit" className="btn btn-primary">Search</button>
            </form>

            {axiosResult ? (
              <div>
                <p className="card-text1">Artist: {axiosResult.artist.name}</p>
                <p className="card-text2">Track Title: {axiosResult.title}</p>
                <p className="card-text3">Duration: {axiosResult.duration} seconds</p>
                <p className="card-text4">Explicit Lyrics: {axiosResult.explicit_lyrics ? 'Yes' : 'No'}</p>
                <audio controls className='audio'>
                  <source src={axiosResult.preview} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            ) : (
              <p className="card-text">Search an Artist</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
