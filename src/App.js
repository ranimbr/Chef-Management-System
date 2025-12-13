import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import SignupChef from './components/SignupChef';
import SignupClient from './components/SignupClient';
import AddDish from './components/AddDish';
import DishList from './components/DishList';
import UsersList from './components/UsersList';
import DishDetails from './components/DishDetails';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <Router>
      <Header /> {/* Le Header est affiché ici */}
      <div className="site-wrap">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup-chef" element={<SignupChef />} />
          <Route path="/signup-client" element={<SignupClient />} />
          <Route path="/add-dish" element={<AddDish />} />
          <Route path="/dish-list" element={<DishList />} />
          <Route path="/users-list" element={<UsersList />} />
          <Route path="/dish/:index" element={<DishDetails />} /> 
          <Route path="/user-details" element={<UserDetails />} />
         
        </Routes>
      </div>
      <Footer /> {/* Le Footer est affiché ici */}
    </Router>
  );
}

export default App;

