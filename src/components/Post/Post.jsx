import React from 'react';

import s from'./Post.module.css';

const Post = (props) => {

    return <div className={s.content}>
    <div>
        <div className={s.item}>
          <p className='author'>{props.name}</p>
          <img alt='ava' src='https://mpng.subpng.com/20180419/jpq/kisspng-computer-icons-user-clip-art-set-of-abstract-icon-5ad95b80e26f59.3085583815241941769275.jpg'/>
            {props.message}        
            <span>✚({props.likes})</span>
        </div>
    </div>
    </div>
}

export default Post;