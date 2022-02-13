import './App.css';
import './Header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
function App() {
  return (
     //react-router needed for page routing
   // because react by default doesn't include.
   <Router>
      <div className="app">
        <h1>Hello it's git test</h1>
        <Header />
      </div>
    </Router>
    
  );
}

export default App;
