import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes-config";
import NavContainer from './containers/nav-container';

function App() {
  return (
    <div className="container">
      <div> Hotel Management System</div>
      <Router>
        <NavContainer />
        <Routes>
          {
            routes && routes.map(({path, component}) => {
              return <Route path={path} Component={component} />
            })
          }
        </Routes>
      </Router>
    </div>
  );
}

export default App;
