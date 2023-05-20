import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages'
import Team from './components/Company/Team'

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/Company/Team" element={<Team/>} />
      </Routes>
    </Router>

  );
}

export default App;
