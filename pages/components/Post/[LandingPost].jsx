// import { useState } from "react";
import Header from "../Header/Header";
import MainPost from "./MainPost";
import { usePostContext, PostProvider } from "../UsePost/PostContext";
import {useState} from "../Home/Home"
import { useRouter } from "next/router";



export default function LandingPost() {
    const {posts, setPosts} = usePostContext()
    const router = useRouter()
    const getPost = () => {
        const filtered = posts.filter(post => post.id === parseInt(router.query.LandingPost));
        return filtered[0];
    }
    return (
    <div>
        <Header />
        <MainPost  {...getPost()}/>
    </div>)
}