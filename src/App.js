import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
// import Product from './Product';
function App() {
  return (

    
    <div className="app">
      {/* <Header /> */}
       <BrowserRouter>
    

       <Routes>
          
          <Route exact path="/Checkout" element={   <Header />} >
          {/* <Route path="/" element={<Header />}> */}
          
          </Route>
        </Routes>

        <Routes>
          
          <Route exact path="/Checkout" element={<Checkout/>} >
          {/* <Route path="/" element={<Header />}> */}
          
          </Route>

        </Routes>

        <Routes>
          
          <Route exact path="/Login" element= {<Login />} >
          {/* <Route path="/" element={<Header />}> */}
          
          </Route>
        </Routes>
       
        <Routes>
          <Route exact path="/" element={   <Header />} >
          {/* <Route path="/" element={<Header />}> */}
          
          </Route>

        </Routes>
       
        <Routes>
          <Route exact path="/" element={<Home />} >
          {/* <Route path="/" element={<Header />}> */}
          
          </Route>

        </Routes>

  </BrowserRouter>

    </div>
  );
}

export default App;
