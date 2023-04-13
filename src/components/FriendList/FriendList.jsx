import PropTypes from 'prop-types'
import css from './FriendList.module.scss'
import { FriendListItem } from './FriendListItem'

export const FriendList = ({ friends }) => {
	return (
		<ul className={css.friend_list}>
			{friends.map(({ id, isOnline, avatar, name }) => (
				<FriendListItem
					key={id}
					isOnline={isOnline}
					avatar={avatar}
					name={name}
				/>
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
	),
}
