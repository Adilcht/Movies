import logo from './logo.svg';
import './App.css';
 import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import MyNavbar from './components/Navbar';
 import MyHome from './components/Home';
import MyFooter from './components/Footer';
import TousLesFilms from './components/TousLesFilms';
import Propos from './components/Propos';
import MovieDetail from './components/MovieDetail';




function App() {
  return (
   <Router>

< MyNavbar/>

<Routes>


 
  <Route path='/' element = { <MyHome /> } ></Route>
  <Route path="/TousLesFilms" element={<TousLesFilms />} ></Route>
  <Route path="/Propos" element={<Propos />} ></Route>
  <Route path="/film/:id" element={<MovieDetail />} />



</Routes>

< MyFooter/>

 </Router>
  );
}

export default App;
