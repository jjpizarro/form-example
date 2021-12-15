import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './componets/Header';
import MyRoutes from './routes/MyRoutes';
function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <MyRoutes />
      </div>
    </Router>
    
  );
}

export default App;
