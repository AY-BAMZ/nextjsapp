import React, { useState, useEffect, createContext, useContext } from "react";

const PostContext = createContext();

const PostProvider = (props) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/photos";
        fetch(url)
            .then((resp) => resp.json())
            .then((resp) => setPosts(resp));
    }, []);
    return ( <
        PostContext.Provider value = {
            { posts, setPosts }
        } > { props.children } { " " } <
        /PostContext.Provider>
    );
};

export const usePostContext = () => {
    const context = useContext(PostContext);
    //   if (!context) throw new Error("usePostContext must be used in PostProvider");

    return context;
};

export default PostProvider;