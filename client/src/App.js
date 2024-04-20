import './App.css';
import '../src/assets/css/main.css';
import '../src/assets/css/all.min.css';
import '../src/assets/css/animate.css';
import '../src/assets/css/magnific-popup.css';
import '../src/assets/css/meanmenu.min.css';
import '../src/assets/css/responsive.css';
import '../src/assets/css/statsphere.css';
import '../src/assets/bootstrap/css/bootstrap.min.css';
import '../src/assets/bootstrap/css/bootstrap-grid.css';
import '../src/assets/bootstrap/css/bootstrap-grid.css.map'
import '../src/assets/bootstrap/css/bootstrap-reboot.css';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import {Index} from "./pages/index";
import {Account} from "./pages/account";
import {Navbar} from "./components/navbar";
import {Footer} from "./components/footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/index' element={<Index />}/>
          <Route path='/account' element={<Account />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
