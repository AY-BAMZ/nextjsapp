import '../styles/globals.css'
import PostProvider from "./components/UsePost/PostContext"

function MyApp({ Component, pageProps }) {
  return <PostProvider>
    <Component {...pageProps} />
    </PostProvider>
}

export default MyApp
