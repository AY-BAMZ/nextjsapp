import React, { useState, useEffect } from "react";
import Post from "./Post";
import styles from "../../../styles/components/Home/Home.module.css"
import { usePostContext } from "../UsePost/PostContext";


function Home() {
  

  const { posts, setPosts } = usePostContext();
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(4)
  
  


  

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <div>
      
      <div className={styles.posts}>
        {currentPosts.map((post) => (
          <Post id={post.id} title={post.title} thumbnailUrl={post.thumbnailUrl} key={post.id} />
        ))}
      </div>
      <button onClick={() => setPostPerPage(postPerPage + 4)} className={styles.button}>Load More</button>
    </div>
  );
}

export default Home;
