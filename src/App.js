import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages'
import Team from './components/Company/Team'
import DataTransmission from './components/OurServices/DataTransmission';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/Company/Team" element={<Team/>} />
          <Route path="/OurServices/DataTransmission" element={<DataTransmission/>} />
      </Routes>
    </Router>

  );
}

export default App;
