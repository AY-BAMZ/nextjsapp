// import { useState } from "react";
import Header from "../Header/Header";
import MainPost from "./MainPost";
import { usePostContext, PostProvider } from "../UsePost/PostContext";
import {useState} from "../Home/Home"

export default function LandingPost() {
    const {posts, setPosts} = usePostContext()
    const getPost = (id) => {
        const filtered = posts.filter(post => post.id === parseInt(id));
        return filtered[0];
    }
    return (
    <div>
        <PostProvider>

        <Header />
        <MainPost {...getPost(id)} />
        </PostProvider>
    </div>)
}