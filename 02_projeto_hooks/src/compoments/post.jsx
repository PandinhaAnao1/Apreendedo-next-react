import P from 'prop-types';

PostList.propTypes = {
    post: P.shape({
        id: P.number,
        title: P.string,
        body: P.string, 
    })
}
export default function PostList({ list }) {

    return (
        <div>
           {list.map((post, index) => {
                return (
                    <div key={index}>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                );
            })}
        </div>
    );
}