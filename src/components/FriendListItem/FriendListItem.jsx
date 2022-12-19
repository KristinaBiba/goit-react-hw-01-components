import PropTypes from 'prop-types'
import css from '../FriendListItem/FriendListItem.module.css'
import clsx from 'clsx'


export const FriendListItem = ({ id, avatar, name, isOnline }) => {
return (<li className={css.item} key={id}>
  <span className={clsx(css.status, isOnline && css.isOnline)}></span>
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={css.name}>{name}</p>
</li>)
}

FriendListItem.propTypes = {
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number,
    
}