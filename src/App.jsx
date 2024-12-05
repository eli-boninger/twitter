import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import { Callback } from './Callback';
import axios from 'axios';

function App() {

  const handleAuth = async () => {
    await axios.get(`https://twitter.com/i/oauth2/authorize?response_type=code&client_id=${process.env.X_CLIENT_ID}&redirect_uri=${encodeURIComponent(process.env.X_REDIRECT_URI)}&scope=${scopes}&state=state&code_challenge=challenge&code_challenge_method=plain`);
  };

  return (
    <>
      <BrowserRouter>
        <button onClick={handleAuth}>Authenticate</button>
        <Routes>
          <Route path="/callback" element={<Callback />} />
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
