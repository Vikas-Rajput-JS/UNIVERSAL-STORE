
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import SignIn from './Components/SignIn';
import LogIn from './Components/LogIn';
import Home from './Components/Home';
import Cart from './Components/Cart';
import ProductDetails from './Components/ProductDetails';


function App() {



 
  return (
    <div className="App w-[100%] h-[100vh] bg-[#252525]">
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignIn/>} />
      <Route path='/login' element={<LogIn/>} />
      <Route path='/Home' element={<Home/>} />
      <Route path='/Cart' element={<Cart/>} />
      <Route path='/Cart/:id' element={<ProductDetails/>}/>
    </Routes>
    </BrowserRouter>
     
 
    </div>
  );
}

export default App;
