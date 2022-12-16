import { Profile } from '../Profile/Profile'
import {Statistics} from '../Statistics/Statistics'
import user from '../../path/user.json'
import data from '../../path/data.json'
import css from '../Wrapper/Wrapper.module.css'

export const Wrapper = () => {
    return (<div className={css.wrapper}>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    >
      </Profile>
      <Statistics title="Upload stats" stats={data} />
    </div>)
}

