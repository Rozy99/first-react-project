import React from 'react';
import lamps from '../../../assets/img/lamps.jpg';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.profile_wallpaper} style={{ backgroundImage: `url(${lamps})` }}></div>

      <div className={`${s.user_profile} d_flex a_items__end`}>
        <div className={s.user_avatar}>
          <img src={require('./../../../assets/img/avatar.jpg')} alt='avatar' />
        </div>
        <div className={s.user_info}>
          <h3>Rozi Gh.</h3>
          <p>DOB: 16 May 1999</p>
          <p>City: Yerevan</p>
          <p>Education: YSU</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;


