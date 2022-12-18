import PropTypes from "prop-types";
import css from '../TransactionHistory/TransactionHistory.module.css'

export const TransactionHistory = ({id, type, amount, currency}) => {
    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Invoice</td>
                    <td>125</td>
                    <td>USD</td>
                </tr>
                <tr>
                    <td>Withdrawal</td>
                    <td>85</td>
                    <td>USD</td>
                </tr>
            </tbody>
        </table>);
}
TransactionHistory.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.number,
    title:PropTypes.string,
    currency: PropTypes.number,
};