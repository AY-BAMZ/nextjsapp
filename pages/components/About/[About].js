import { useRouter } from "next/router"


export default function About() {
    const router = useRouter()
    console.log(router.query);
    return <div > This is { router.query.About } < /div>;
}