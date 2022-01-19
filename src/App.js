import {Route, Routes} from "react-router-dom";

import Header from "./components/header/Header";
import UsersPage from "./pages/usersPage/UsersPage";
import PostsPage from "./pages/postsPage/PostsPage";
import NotFoundPage from "./pages/notFoundPage/notFoundPage";
import SingleUserPage from "./pages/singleUserPage/SingleUserPage";
import SinglePostPage from "./pages/singlePostPage/SinglePostPage";
import UserPostsPage from "./pages/userPostsPage/UserPostsPage";
import PostCommentsPage from "./pages/PostCommentsPage/PostCommentsPage";
import UserAlbumsPage from "./pages/userAlbumsPage/UserAlbumsPage";
import AlbumPhotosPage from "./pages/albumPhotosPage/AlbumPhotosPage";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path={'/'} element={<Header/>}>
              <Route path={'users'} element={<UsersPage/>}>
                  <Route path={':id'} element={<SingleUserPage/>}>
                      <Route path={'posts'} element={<UserPostsPage/>}/>
                  </Route>
                  <Route path={':id/albums'} element={<UserAlbumsPage/>}>
                      <Route path={':albumId/photos'} element={<AlbumPhotosPage/>}/>
                  </Route>
              </Route>
              <Route path={'posts'} element={<PostsPage/>}>
                  <Route path={':id'} element={<SinglePostPage/>}>
                      <Route path={'comments'} element={<PostCommentsPage/>}/>
                  </Route>
              </Route>
              <Route path={'*'} element={<NotFoundPage/>}/>
          </Route>
      </Routes>
    </div>
  );
}

export default App;

