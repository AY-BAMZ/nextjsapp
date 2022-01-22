import { useState } from "react";
import { usePostContext } from "../UsePost/PostContext";

export default function MainPost(props) {
    const {title, thumbnailUrl, id} = props;
    return (
    <div>
        <img src={thumbnailUrl} alt="" />
        <h1>{title}</h1>
    </div>
    )
}