import {Navigate, Route, Routes} from "react-router-dom";

import {Layout} from "./components";
import {
  UsersPage,
  PostsPage,
  UsersDetailsPage,
  PostsDetailsPage,
  PostCommentsPage,
  UserPostsPage,
  AlbumsPage,
  PhotosPage
} from "./pages";

import './App.css';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Layout/>}>
        <Route index element={<Navigate to={'users'}/>}/>

        <Route path={'users'} element={<UsersPage/>}>
          <Route path={':id'} element={<UsersDetailsPage/>}>
            <Route path={'posts'} element={<UserPostsPage/>}/>
          </Route>

          <Route path={':id/albums'} element={<AlbumsPage/>}>
            <Route path={':albumsId/photos'} element={<PhotosPage/>}/>
          </Route>
        </Route>

        <Route path={'posts'} element={<PostsPage/>}>
          <Route path={':id'} element={<PostsDetailsPage/>}>
            <Route path={'comments'} element={<PostCommentsPage/>}/>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
