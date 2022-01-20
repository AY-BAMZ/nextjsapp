import React from "react";
import styles from "../../../styles/components/Home/Post.module.css";
import { useRouter } from 'next/router'

function Post({ title, thumbnailUrl, id }) {
  const router = useRouter()

  return (
    <div onClick={() => router.push('/components/Post/LandingPost')} className={styles.container}>
      <img src={thumbnailUrl} alt="" />
      <h2>{title}</h2>
    </div>
  );
}

export default Post;
