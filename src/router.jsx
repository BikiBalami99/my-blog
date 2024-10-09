import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import Users from "./components/Users";
import Posts from "./components/posts";
import Todos from "./components/Todos";
import Layout from "./components/Layout";
import Post from "./components/subComponents/Post";
import User from "./components/subComponents/User";
// import User from "./components/User";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Navigate to="/posts" />} />
      <Route path="posts" element={<Posts />} />
      <Route path="posts/:id" element={<Post />} />
      <Route path="users" element={<Users />} />
      <Route path="users/:userId" element={<User />} />
      <Route path="todos" element={<Todos />} />
    </Route>
  )
);
