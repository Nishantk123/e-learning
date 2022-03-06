import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './component/Home';
import Enquiry from './component/Enquiry';
import Header from './component/Header';
import Register from './component/Register';
import Enrollment from './component/Enrollement';
function App() {
  return (
    <Router>
    <div className="App">
      <Header />
     <Route exact path="/" component={Home} />
     <Route exact path="/enquiry" component={Enquiry} />
     <Route exact path="/register" component={ Register} />
     <Route exact path="/enrollment" component={Enrollment} />
    </div>
    </Router>
  );
}

export default App;
