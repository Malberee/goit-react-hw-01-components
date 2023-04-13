import { useState } from 'react'
import './App.scss'
import { Profile } from './UserProfile/Profile'
import { Statistics } from './Statistics/Statistics'
import { FriendList } from './FriendList/FriendList'
import { TransactionHistory } from './TransactionHistory/TransactionHistory'
import data from '../data/data'
import friends from '../data/friends'
import user from '../data/user'
import transactions from '../data/transactions'

function App() {
	return (
		<>
			<Profile
				username={user.username}
				tag={user.tag}
				location={user.location}
				avatar={user.avatar}
				stats={user.stats}
			/>

			<Statistics title="Upload stats" stats={data} />

			<FriendList friends={friends} />

			<TransactionHistory items={transactions} />
		</>
	)
}

export default App
