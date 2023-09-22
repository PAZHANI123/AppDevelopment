
import Login from './Pages/Login';
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom';
import Signup from './Pages/Signup';
import DashBoard from './Pages/Dashboard';
// import Dashboard from './Pages/Dashboard';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/dashboard/login' element={<Login/>}/>
          <Route  path='/signup' element={<Signup/>}/>
          <Route  path='/dashboard' element={<DashBoard/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
