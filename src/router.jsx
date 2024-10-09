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

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Navigate to="/posts" />} />
      <Route path="posts" element={<Posts />} />
      <Route path="users" element={<Users />} />
      <Route path="todos" element={<Todos />} />
    </Route>
  )
);
