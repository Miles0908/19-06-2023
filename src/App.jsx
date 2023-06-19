import { useState } from "react";
import TopBar from "./components/TopBar";
import Stories from "./components/Stories";
import Posts from "./components/Posts";

import { storiesData } from "./components/mocks/stories";
import { postsData } from "./components/mocks/posts";
import {userData} from "./components/mocks/user"

import "./App.css";

function App() {
  const [stories, setStories] = useState(storiesData);
  const [user, setUser] = useState(userData);
  const [posts, setPosts] = useState(postsData);
  return (
    <div className="App">
      <TopBar />
      <Stories user={user} stories={stories} />
      <Posts posts={posts} />
    </div>
  );
}

export default App;
