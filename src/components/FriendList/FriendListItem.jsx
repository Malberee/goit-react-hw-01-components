import PropTypes from 'prop-types'
import css from './FriendList.module.scss'

export const FriendListItem = ({ isOnline, avatar, name }) => {
    return (
        <li className={css.friend_item}>
		<span className={isOnline ? css.online : css.offline}></span>
		<img className={css.avatar} src={avatar} alt="User avatar" width="48" />
		<p className={css.name}>{name}</p>
	</li>
    )
}

FriendListItem.propTypes = {
	isOnline: PropTypes.bool.isRequired,
	avatar: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
}
