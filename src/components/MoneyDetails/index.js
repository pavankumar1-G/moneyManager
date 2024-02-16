// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {totalBalance, totalIncome, totalExpenses} = props

  return (
    <div className="money-details-container">
      <div className="your-balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="money-details-img"
        />
        <div className="money-details-content">
          <p className="your-money-status">Your Balance</p>
          <p className="rupees" data-testid="balanceAmount">
            Rs {totalBalance}
          </p>
        </div>
      </div>

      <div className="your-income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="money-details-img"
        />
        <div className="money-details-content">
          <p className="your-money-status">Your Income</p>
          <p className="rupees" data-testid="incomeAmount">
            Rs {totalIncome}
          </p>
        </div>
      </div>

      <div className="your-expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="money-details-img"
        />
        <div className="money-details-content">
          <p className="your-money-status">Your Expenses</p>
          <p className="rupees" data-testid="expensesAmount">
            Rs {totalExpenses}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
