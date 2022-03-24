import { db } from "./firebase-config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useState } from "react";
import DisplayBolgPost from "./DisplayBolgPost";
//TODO:
// - Style form to add blog post
// - Display all post using map on firebase db
// - Separate into different components

function AddBlogPost() {
    const [title, setTitle] = useState("");
    const [postBody, setPostBody] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "blogpost"), {
                title: title,
                postBody: postBody,
                created: Timestamp.now(),
            });
        } catch (err) {
            alert(err);
        }
    };

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    onChange={(e) => setTitle(e.target.value.toUpperCase())}
                    value={title}
                    placeholder="Enter Title"
                />
                <textarea
                    onChange={(e) => setPostBody(e.target.value)}
                    placeholder="Enter Task Description"
                    value={postBody}
                ></textarea>
                <button type="submit">Done</button>
            </form>
            <div>
                <h2>Display Blog Post Here</h2>
            </div>
            <DisplayBolgPost />
        </div>
    );
}

export default AddBlogPost;
