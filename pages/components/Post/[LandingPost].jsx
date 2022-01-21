// import { useState } from "react";
import Header from "../Header/Header";
import MainPost from "./MainPost";
import {useState} from "../Home/Home"

export default function LandingPost() {
    const [posts] = useState([]);
    const getPost = (id) => {
        const filtered = posts.filter(post => post.id === parseInt(id));
        return filtered[0];
    }
    return (
    <div>
        <Header />
        <MainPost {...getPost(id)} />
    </div>)
}