import React from 'react';
import ava from '../../img/Avatar.png';
import s from'./Post.module.css';

const Post = (props) => {

    return <div className={s.content}>
    <div>
        <div className={s.item}>
            <img alt='ava' src={ava}/>
          <p className='author'>{props.name}</p>
            {props.message}
            <span>✚({props.likes})</span>
        </div>
    </div>
    </div>
}

export default Post;