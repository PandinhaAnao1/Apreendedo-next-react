import P from 'prop-types';
import Post from './post';

PostList.propTypes = {
    post: P.shape({
        id: P.number,
        title: P.string,
        body: P.string,
    })
}

export default function PostList({ list }) {
    {
        list.map((post, index) => {
            return (<Post post={post} key={index} />);
        })
    }
}



list, handleClick