import React from "react";
import styles from "../../../styles/components/Home/Post.module.css"

function Post({ title, thumbnailUrl, id }) {
  return (
    <div className={styles.container}>
       <img src={thumbnailUrl} alt="" />
        <h2>{title}</h2>
    </div>
  );
}

export default Post;
