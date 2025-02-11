import { useState } from 'react';
import './styles.css';

export const PostCard = ({ cover, title, body }) => {

    const [imgSrc, setImgSrc] = useState(cover);
    return (

        <div className='post'>
            <img
                src={imgSrc}
                alt={title || 'Imagem padrão'}
                onError={() => setImgSrc('/cat-square-1.jpg')}
            />
            <div className='post-content'>
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
        </div>
    );
}
