import PropTypes from "prop-types";
import css from '../Statistics/Statistics.module.css'

export const Statistics = ({title, stats}) => {
return (<section class={css.statistics}>
    {(title) && <h2 class={css.title}>{title}</h2>}

    <ul class={css.statList}>
        {stats.map((stat) => (
            (<li class={css.item} key={stat.id}>
                <span class={css.label}>{stat.label}</span>
                <span class={css.percentage}>{stat.percentage}</span>
             </li>)))}
  </ul>
</section>)
} 
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.shape({
        label: PropTypes.string,
        percentage: PropTypes.number,
    }),

};