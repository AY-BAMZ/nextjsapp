import React, { useState, useEffect } from "react";
import Post from "./Post";
import styles from "../../../styles/components/Home/Home.module.css"

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/photos";
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setPosts(resp));
  }, []);
  return (
    <div>
      <div className={styles.posts}>
        {posts.map((post) => (
          <Post title={post.title} thumbnailUrl={post.thumbnailUrl} key={post.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
