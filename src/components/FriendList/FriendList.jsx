import css from './FriendList.module.scss'

export const FriendList = ({friends}) => {
    return (
        <ul className={css.friend_list}>
            {friends.map(friend => (
                <li key={friend.id} className={css.friend_item}>
                    <span className={css.status} style={{backgroundColor: (friend.isOnline ? "#25b35c" : "#d64646")}}></span>
                    <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
                    <p className={css.name}>{friend.name}</p>
                </li>
        ))}
        </ul>
    )
}