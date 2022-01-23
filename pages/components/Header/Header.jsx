import React, { useRef, useState, useEffect } from "react";
import styles from "../../../styles/components/Header/Header.module.css";
import { FiSearch } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";
import { useRouter } from "next/router";
import Link from "next/link";
import { usePostContext } from "../UsePost/PostContext";

function Header({onSearchTrigger}) {
  const { posts, setPosts } = usePostContext();
  const inputEl = useRef("");
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const [searchResult, setSearchResult] = useState([])

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm)
    if (searchTerm !== "") {
      const newPosts = posts.filter((newPost) => {
        return Object.values(newPost).join("").toLowerCase().includes(searchTerm.toLowerCase())
      });
      
    setSearchResult(newPosts);
    }
    else {
      setSearchResult(posts)
    }
  };

  useEffect(() => {
    if (searchTerm.length >= 1) {
      onSearchTrigger(searchResult)
    }
    else {
      onSearchTrigger(posts)
    }
    // const newLists =  ? posts : searchResult
    // console.log(newLists);
  }, [searchTerm, searchResult, posts]);
  

  const getSearchTerm = () => {
    // searchHandler(inputEl.current.value);
    searchHandler(inputEl.current.value);
  };
  return (
    <>
      <div className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            d<span>b</span>
          </div>
          <form className={styles.search}>
            <input
            ref={inputEl}
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={getSearchTerm}
            />
            <button className={styles.button}>
              <FiSearch />
            </button>
          </form>
          <div className={styles.navLinks}>
            <div className={styles.menuButton} onClick={() => setOpen(!open)}>
              <HiMenuAlt3 />
            </div>
            <div className={styles.links}>
              {open == true && (
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/components/Cart/RenderCart">Cart</Link>
                  </li>
                  <li>
                    <Link href="/components/About/RenderAbout">About</Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
