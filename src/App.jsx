import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import About from "./pages/About";
import DefaultLayout from "./layouts/DefaultLayout";
import PostsShow from "./pages/PostsShow";
import TagPosts from "./pages/TagPosts";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/auth/Dashboard";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import PrivateRoutes from "./middlewares/PrivateRoutes";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            {/* public routes */}
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<Home />}></Route>
              <Route path="/posts" element={<Posts />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/posts/:slug" element={<PostsShow />}></Route>
              <Route path="/tagposts/:tags" element={<TagPosts />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
            </Route>
            {/* private routes */}
            <Route
              path="/dashboard"
              element={
                <PrivateRoutes>
                  <DefaultLayout />
                </PrivateRoutes>
              }
            >
              <Route index element={<Dashboard />}></Route>
              <Route path="user" element={<Dashboard />}></Route>
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
