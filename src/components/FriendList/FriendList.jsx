import PropTypes from 'prop-types'
import css from './FriendList.module.scss'

export const FriendList = ({friends}) => {
    return (
        <ul className={css.friend_list}>
            {friends.map(({id, isOnline, avatar, name}) => (
                <li key={id} className={css.friend_item}>
                    <span className={css.status} style={{backgroundColor: (isOnline ? "#25b35c" : "#d64646")}}></span>
                    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                    <p className={css.name}>{name}</p>
                 </li>
        ))}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
                id: PropTypes.number.isRequired,
                isOnline: PropTypes.bool.isRequired,
                avatar: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
        })
    )
}