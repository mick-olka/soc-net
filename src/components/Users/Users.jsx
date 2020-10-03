import React from "react";

import s from './Users.module.css';

const Music = () => {

  return (
    <div className='content'>
      <h1 id='heading'>Worldwide</h1>
      <div className="list">
        <div className={s.item}>user</div>
        <div className={s.item}>user</div>
        <div className={s.item}>user</div>
        <div className={s.item}>user</div>
        <div className={s.item}>user</div>
        <div className={s.item}>user</div>
      </div>
    </div>
  );
};

export default Music;
