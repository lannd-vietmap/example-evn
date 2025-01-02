import logo from './logo.svg';
import './App.css';
import Routing from './pages/Routing/routing';
import MarkerPNG from './pages/Marker/PNG/marker-png';
import MarkerSVG from './pages/Marker/SVG/marker-svg';
import MapControl from './pages/Map/map-control';

function App() {
  return (
      <MapControl></MapControl>
      // <Routing></Routing>
      // <MarkerPNG></MarkerPNG>
      // <MarkerSVG></MarkerSVG>
  );
}

export default App;
