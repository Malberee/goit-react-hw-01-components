import css from './TransactionHistory.module.scss'

export const TransactionHistory = ({items}) => {
    return (
<table className={css.transaction_history}>
  <thead className={css.table_head}>
    <tr>
      <th className={css.table_head_item}>type</th>
      <th className={css.table_head_item}>amount</th>
      <th className={css.table_head_item}>currency</th>
    </tr>
  </thead>

  <tbody className={css.table_body}>
    {items.map(item => (
        <tr key={item.id}>
            <td className={css.table_body_item}>{item.type}</td>
            <td className={css.table_body_item}>{item.amount}</td>
            <td className={css.table_body_item}>{item.currency}</td>
        </tr>
    ))}
  </tbody>
</table>
    )
}