import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
import Registration from './pages/Registration';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <Link to="/">Home Page</Link>
          <Link to="/createpost">Create A Post</Link>
          <Link to="/login">Login</Link>
          <Link to="/registration">Registration</Link>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/createpost" element={<CreatePost />}/>
          <Route exact path="/post/:id" element={<Post />}/>
          <Route exact path="/registration" element={<Registration />}/>
          <Route exact path="/login" element={<Login />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
