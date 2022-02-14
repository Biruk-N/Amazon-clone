import './App.css';
import { BrowserRouter , Router, Routes, Route } from "react-router-dom";

import Header from './Header';
import Home from './Home';
function App() {
  return (
    //react-router needed for page routing
    // because react by default doesn't include.
    // <Router>
    //   <div className="app">
    //    <Routes>
    //     <Route  exact path="/">              
    //         {/* Header path="Checkout"*/}
    //         <Header />
    //         <h1> I AM CHECKOUT</h1>
    //         <Home />
    //         {/* Home */}
    //       </Route>

    //       <Route path="/">              
    //         {/* Header */}
    //         <Header />
    //         <Home />
    //         {/* Home */}
    //       </Route>
 
    //    </Routes>

    //   </div>
    // </Router>
    <div className="app">
      <Header />
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >
          
          {/* <Route path="/he" element={} /> */}
          
          </Route>
        </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
