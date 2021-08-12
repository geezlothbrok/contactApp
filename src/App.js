import dashBoard from './pages/dashBoard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { BrowserRouter, Route, } from 'react-router-dom';
import ProtectedRoute from './component/ProtectedRoute';
import Settings from './pages/Settings';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <ProtectedRoute path="/" exact component={dashBoard} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <ProtectedRoute path="/settings" component={Settings} />
      </BrowserRouter>
    </div>
  );
}

export default App;