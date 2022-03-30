import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

function DisplayBlogPost() {
    const [loading, setLoading] = useState(true);
    const [blogPostList, setBlogPostList] = useState([]);

    useEffect(()=> {
        const getBlogPostFirebase = [];
        const blogPostRef = db.collection("blogpost").onSnapshot((querySnapshot)=> {
            querySnapshot.forEach((doc) => {
                getBlogPostFirebase.push({...doc.data(), key: doc.id});

            });
            return () => blogPostRef();
    }},[]));
    


    // const renderBlogPost = () => {};

    return <div>BLOGS:</div>;
}

export default DisplayBlogPost;
