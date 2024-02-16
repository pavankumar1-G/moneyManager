// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const onClickDeleteItem = () => {
    deleteTransaction(id)
  }

  return (
    <li className="transaction-item">
      <p className="title-cell">{title}</p>
      <p className="amount-cell">{amount}</p>
      <p className="type-cell">{type}</p>
      <div className="delete-btn-container">
        <buttton
          className="delete-btn"
          type="button"
          onClick={onClickDeleteItem}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-icon"
          />
        </buttton>
      </div>
    </li>
  )
}
export default TransactionItem
