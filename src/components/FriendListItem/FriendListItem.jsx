import css from '../FriendListItem/FriendListItem.module.css'


export const FriendListItem = ({ id, avatar, name, isOnline }) => {
    let spanClassName = "";
    { isOnline ? spanClassName = `${css.status} ${css.isOnline}` : spanClassName = `${css.status}` };
return (<li className={css.item} key={id}>
    <span className={spanClassName}></span>
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={css.name}>{name}</p>
</li>)
}