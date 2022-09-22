import axios from "axios";
import { useEffect, useState } from "react";
import SpinUI from "./spin.presenter";

export default function Spin() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleDate = async () => {
    // prettier-ignore
    try {
        const result = await axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            console.log("result:", result)
            setPosts(response.data)
        });
    } catch (error) {
        console.log("error.message:", error.message)
    }
  };

  useEffect(() => {
    handleDate();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return <SpinUI posts={posts} isLoading={isLoading} />;
}
