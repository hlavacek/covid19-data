import React from 'react';
import ApplicationBar from './components/ApplicationBar';
import './App.css';
import MapPage from './pages/Map/MapPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <ApplicationBar />
      <MapPage />
    </div>
  );
};
export default App;
