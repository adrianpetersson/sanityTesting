import {Routes, Route} from "react-router-dom";
import {Home, About, SinglePost, Post, Project, NavBar} from "./components/index";


function App() {
  return (
    <>
    <NavBar />
    <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/post/:slug" element={<SinglePost />} />
          <Route path="/post" element={<Post />} />
          <Route path="/project" element={<Project />} />
      </Routes>
      </>
  );
}

export default App;
