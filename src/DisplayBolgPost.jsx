import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";

function DisplayBolgPost() {
    const [blogPostList, setBlogPostList] = useState([]);
    const blogPostRef = collection(db, "blogpost");

    const fetchBlogPost = () => {
        getDocs(blogPostRef).then((snapshot) => {
            setBlogPostList(
                prevblogList,
                snapshot.docs.map((doc) => {
                    blogs.push({ ...doc.data(), id: doc.id });
                })
            );
        });
    };

    // const renderBlogPost = () => {};

    return <div>BLOGS:</div>;
}

export default DisplayBolgPost;
