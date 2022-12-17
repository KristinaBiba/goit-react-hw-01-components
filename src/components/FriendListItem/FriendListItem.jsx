import css from '../FriendListItem/FriendListItem.module.css'


export const FriendListItem = ({id, avatar, name, isOnline}) => {
return (<li class={css.item} key={id}>
  <span class={css.status}></span>
  <img class={css.avatar} src={avatar} alt="User avatar" width="48" />
  <p class={css.name}>{name}</p>
</li>)
}