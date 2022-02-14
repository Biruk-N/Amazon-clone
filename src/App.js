import './App.css';
import './Header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
function App() {
  return (
     //react-router needed for page routing
   // because react by default doesn't include.
  //  <Router></Router>
      <div className="app">
        
        <Header />
        <Home /> 
      </div>
    
    
  );
}

export default App;
