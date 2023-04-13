import PropTypes from 'prop-types'
import css from './TransactionHistory.module.scss'

export const TransactionHistory = ({ items }) => {
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
				{items.map(({ id, type, amount, currency }) => (
					<tr key={id}>
						<td className={css.table_body_item}>{type}</td>
						<td className={css.table_body_item}>{amount}</td>
						<td className={css.table_body_item}>{currency}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

TransactionHistory.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			type: PropTypes.string.isRequired,
			amount: PropTypes.string.isRequired,
			currency: PropTypes.string.isRequired,
		})
	),
}
