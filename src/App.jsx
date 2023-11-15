import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './pages/Home';
import User from './pages/User';
import AddUsers from './pages/AddUsers';
import UserDetails from '/pages/UserDetails'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="footer">
          <Footer />
        </div>
        <div className="Route">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="users/*" element={<User />} />
            <Route path="users/add" element={<AddUsers />} />
            <Route path="users/:userID" element={<UserDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
