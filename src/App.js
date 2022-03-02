import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './component/Home';
import Enquiry from './component/Enquiry';
import Header from './component/Header';


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
     <Route exact path="/" component={Home} />
     <Route exact path="/enquiry" component={Enquiry} />
    </div>
    </Router>
  );
}

export default App;
