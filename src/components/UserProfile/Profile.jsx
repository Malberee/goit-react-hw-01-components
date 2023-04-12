import css from './Profile.module.scss'
import {FaMapMarkerAlt, FaEye, FaUser, FaHeart} from 'react-icons/fa'

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
<div className={css.profile}>
  <div className={css.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={css.avatar}
    />
    <p className={css.name}>{ username}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}><FaMapMarkerAlt className={css.icon}/>{ location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.stats__item}>
      <span className={css.label}><FaUser className={css.icon}/>Followers</span>
      <span className={css.quantity}>{stats.followers}</span>
    </li>
    <li className={css.stats__item}>
      <span className={css.label}><FaEye className={css.icon}/>Views</span>
      <span className={css.quantity}>{stats.views}</span>
    </li>
    <li className={css.stats__item}>
      <span className={css.label}><FaHeart className={css.icon}/>Likes</span>
      <span className={css.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
    )
}