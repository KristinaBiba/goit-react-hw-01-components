import { Profile } from '../Profile/Profile'
import { Statistics } from '../Statistics/Statistics'
import { FriendList } from '../FriendList/FriendList'
import { TransactionHistory } from '../TransactionHistory/TransactionHistory'

import user from '../../path/user.json'
import data from '../../path/data.json'
import friends from "../../path/friends.json";
import transactions from "../../path/transactions.json";

import css from '../Wrapper/Wrapper.module.css'

export const Wrapper = () => {
  return (
    <div className={css.wrapper}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      >
      </Profile>

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />

    </div>)
}

