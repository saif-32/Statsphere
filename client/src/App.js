import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import Trending from "./pages/trending";
import Scores from "./pages/scores";
import Teams from "./pages/teams";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/trending' element={<Trending />} />
          <Route path='/scores' element={<Scores />} />
          <Route path='/teams' element={<Teams />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
