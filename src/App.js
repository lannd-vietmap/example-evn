import logo from './logo.svg';
import './App.css';
import Routing from './pages/Routing/routing';
import MarkerPNG from './pages/Marker/PNG/marker-png';
import MarkerSVG from './pages/Marker/SVG/marker-svg';
import MapControl from './pages/Map/map-control';
import LineWithPopup from './pages/Routing/line-with-popup';

function App() {
  return (
      <LineWithPopup></LineWithPopup>
      // <MapControl></MapControl>
      // <Routing></Routing>
      // <MarkerPNG></MarkerPNG>
      // <MarkerSVG></MarkerSVG>
  );
}

export default App;
