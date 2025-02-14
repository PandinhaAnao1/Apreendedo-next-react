import { useContext } from "react";

export default function Post({ post }) {
    const { handleClick } = useContext(lobalState);
    return (
        <div>

            <div key={index} onClick={() => handleClick(post.title)}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>

        </div>
    );
}