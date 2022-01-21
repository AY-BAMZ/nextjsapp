import { useState } from "react";

export default function MainPost(props) {
    const {title, thumbnailUrl, id} = props;
    const {posts} = useState()
    return (
    <div>
        <img src={title} alt="" />
        <h1>{thumbnailUrl}</h1>
    </div>
    )
}