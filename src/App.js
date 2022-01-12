import './App.css';

import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div><Users/></div>
        <div className='posts'><Posts/></div>
      </div>

        <div className='comments'><Comments/></div>
    </div>
  );
}

export default App;
