import css from './FriendList.module.scss'

export const FriendListItem = ({ isOnline, avatar, name }) => {
    <li className={css.friend_item}>
        <span
            className={css.status}
            style={{ backgroundColor: isOnline ? '#25b35c' : '#d64646' }}
        ></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
    </li>
}
