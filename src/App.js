import './App.css';
import Home from './Components/Home.jsx'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/portfolio' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
