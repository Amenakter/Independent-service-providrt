
import './App.css';
import Header from './Pages/Home/Header/Header';
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home/Home';
import DentistryDetails from './Pages/DentistryDetails/DentistryDetails';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/RequirAuth/RequireAuth';
import Register from './Pages/Register/Register';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';


function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>} ></Route>
        <Route path='/service/:dentistryId' element={
          <RequireAuth>
            <DentistryDetails></DentistryDetails>
          </RequireAuth>
        }></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='login' element={<Login></Login>}> </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
