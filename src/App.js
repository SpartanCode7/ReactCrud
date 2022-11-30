import './App.css';
import Create from './Components/Create'
import Getdata from './Components/Getdata';
import Update from './Components/Update';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="main">
        <Routes>
            <Route exact  path="/" element={ <Getdata /> } />
            <Route exact path='/create' element={ <Create /> } />
            <Route exact path='/read' element={ <Getdata /> } />
            <Route exact path='/update' element={ <Update /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App