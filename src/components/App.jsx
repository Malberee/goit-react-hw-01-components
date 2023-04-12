import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { Profile } from './UserProfile/Profile'
import user from './UserProfile/user.json'
import { Statistics } from './Statistics/Statistics'
import data from './Statistics/data.json'
import { FriendList } from './FriendList/FriendList'
import friends from './FriendList/friends.json'
import { TransactionHistory } from './TransactionHistory/TransactionHistory'
import transactions from './TransactionHistory/transactions.json'

function App() {
  const [count, setCount] = useState(0)

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
