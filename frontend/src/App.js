// Styles
import './custom.css';



// Routing
import axios from "axios";
import { Routes, Route} from 'react-router-dom';

//Pages
import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/home'
import AccountProfile from './pages/account';
import SinglePost from './pages/post';
import PostWall from './pages/wall';
import CommentForm from './components/forms/comments/commentForm';
import CommentDisplay from './pages/comment';



// Components

function App() {

  axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.token
    
    return (
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/account" element={<AccountProfile/>} />
          <Route path="/post/:id" element={<SinglePost />} />
          <Route path="/wall" element= {<PostWall/>} />
          <Route path="/comment_create/:id" element={<CommentForm />} />
          <Route path="/comment" element={<CommentDisplay/>} />
        </Routes>
      </div>
  );
}

export default App;
