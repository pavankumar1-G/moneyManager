import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    transactionList: [],
    optionId: transactionTypeOptions[0].optionId,
  }

  deleteTransaction = id => {
    const {transactionList} = this.state
    const filteredTransactionList = transactionList.filter(
      eachTransaction => id !== eachTransaction.id,
    )
    this.setState({transactionList: filteredTransactionList})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const whichType = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )
    const {displayText} = whichType
    const newTransaction = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onChangeOptionInput = event => {
    this.setState({optionId: event.target.value})
  }

  onChangeInputAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeInputName = event => {
    this.setState({titleInput: event.target.value})
  }

  getTotalExpenses = transactionList => {
    // const {transactionList} = this.state
    let totalExpenses = 0
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        totalExpenses += eachTransaction.amount
      }
    })
    return totalExpenses
  }

  getTotalIncome = transactionList => {
    // const {transactionList} = this.state
    let totalIncome = 0
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        totalIncome += eachTransaction.amount
      }
    })
    return totalIncome
  }

  getTotalBalance = transactionList => {
    // const {transactionList} = this.state
    let totalBalance = 0
    let totalIncome = 0
    let totalExpenses = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        totalIncome += eachTransaction.amount
      } else {
        totalExpenses += eachTransaction.amount
      }
    })
    totalBalance = totalIncome - totalExpenses

    return totalBalance
  }

  render() {
    const {titleInput, amountInput, optionId, transactionList} = this.state

    const totalBalance = this.getTotalBalance(transactionList)
    const totalIncome = this.getTotalIncome(transactionList)
    const totalExpenses = this.getTotalExpenses(transactionList)

    return (
      <div className="app-container">
        <div className="content-container">
          <div className="profile-container">
            <h1 className="name-greeting">Hi, Richard</h1>
            <p className="gratitude">
              Welcome back to your
              <span className="hilighted-name"> Money Manager</span>
            </p>
          </div>

          <MoneyDetails
            totalBalance={totalBalance}
            totalIncome={totalIncome}
            totalExpenses={totalExpenses}
          />

          <div className="transaction-history-container">
            <div className="add-transaction-container">
              <form className="form" onSubmit={this.onSubmitForm}>
                <h1 className="transaction-heading">Add Transaction</h1>
                <label className="label" htmlFor="title">
                  Title
                </label>
                <input
                  className="input-name"
                  type="text"
                  id="title"
                  placeholder="TITLE"
                  onChange={this.onChangeInputName}
                  value={titleInput}
                />
                <label className="label" htmlFor="amount">
                  AMOUNT
                </label>
                <input
                  className="input-amount"
                  type="text"
                  id="amount"
                  placeholder="AMOUNT"
                  onChange={this.onChangeInputAmount}
                  value={amountInput}
                />
                <label className="label" htmlFor="type">
                  TYPE
                </label>
                <select
                  className="select"
                  id="type"
                  value={optionId}
                  onChange={this.onChangeOptionInput}
                >
                  {transactionTypeOptions.map(eachOption => (
                    <option
                      className="option"
                      key={eachOption.optionId}
                      value={eachOption.optionId}
                    >
                      {eachOption.displayText}
                    </option>
                  ))}
                </select>
                <br />
                <button className="add-btn" type="submit">
                  Add
                </button>
              </form>
            </div>
            <div className="history-container">
              <h1 className="history-heading">History</h1>
              <div className="transaction-table-container">
                <ul className="transaction-table">
                  <li className="table-header">
                    <p className="header-cell">Title</p>
                    <p className="header-cell">Amount</p>
                    <p className="header-cell">Type</p>
                  </li>
                  {transactionList.map(eachTransaction => (
                    <TransactionItem
                      key={eachTransaction.id}
                      transactionDetails={eachTransaction}
                      deleteTransaction={this.deleteTransaction}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
