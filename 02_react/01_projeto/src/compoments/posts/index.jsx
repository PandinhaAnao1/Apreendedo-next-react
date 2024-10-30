import { PostCard } from "../postCard"

export const Posts = ({ posts }) => (
    <div className='posts'>
        {
            posts.map(value => (
                <PostCard
                    key={value.id}
                    body={value.body}
                    cover={value.cover}
                    title={value.title}
                />
            ))
        }
    </div>
)