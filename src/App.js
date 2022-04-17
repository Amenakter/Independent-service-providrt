
import './App.css';
import Header from './Pages/Home/Header/Header';
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

      </Routes>
    </div>
  );
}

export default App;