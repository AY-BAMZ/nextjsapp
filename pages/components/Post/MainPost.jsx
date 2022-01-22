import { useState } from "react";
import { usePostContext } from "../UsePost/PostContext";

export default function MainPost(props) {
    const {title, thumbnailUrl, id} = props;
    return (
    <div>
        <img src={title} alt="" />
        <h1>{thumbnailUrl}</h1>
    </div>
    )
}