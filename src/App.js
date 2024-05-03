import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CountriesList from './Pages/CountriesListPage/CountriesListPage';
import CountyPage from './Pages/CountryPage/CountryPage';

function App() {

  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<CountriesList />} />
        <Route path="/:country" element={<CountyPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
