import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import Home from './pages/Home';
import Statistics from './pages/Statistics';
import Form from './pages/Form';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import Dao from './pages/Dao';
import DAODashboard from './pages/Dao';
import GroupManager from './components/Groupmanager';


function App() {

  return (
    <Router>
      <Routes>
        {/* Add more routes for other pages */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path='/home' element={<Home />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path='/form' element={<Form />}/>
        <Route path = '/groupmanager' element ={<GroupManager />} />
        <Route path='/login' element={<Login />}/>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/dao/:id" element={<DAODashboard />} /> 
      </Routes>
    </Router>
    
  );
}

export default App;