import css from './Statistics.module.scss'

export const Statistics = ({ title, stats }) => {
    return (
<section className={css.statistics}>
  {title && (<h2 className={css.title}>{title}</h2>)}  

  <ul className={css.stats_list}>
                {stats.map(stat => (
                    <li key={stat.id} className={css.stats_item}>
                        <span className={css.label}>{ stat.label}</span>
                        <span className={css.percentage}>{ stat.percentage}%</span>
                    </li>))}
  </ul>
</section>
    )
}