import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Callback } from './Callback';
import Authorize from './Authorize';

function App() {



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Authorize />} />
          <Route path="/callback" element={<Callback />} />
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
