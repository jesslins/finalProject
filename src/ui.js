import { addExpense, getExpenses } from './storage.js';
import { updateChart } from './reports.js';
import $ from 'jquery';

export class UI {
  constructor() {
    this.expenseNameInput = $('#expense-name');
    this.expenseAmountInput = $('#expense-amount');
    this.expenseCategorySelect = $('#expense-category');
    this.expensesTableBody = $('#expenses-table tbody');
    this.addExpenseButton = $('#add-expense');

    this.init();
  }

  /**
     * Initializes event handlers and loads existing expenses.
     */
  init() {
    this.addExpenseButton.on('click', () => this.handleAddExpense());
    this.loadExpenses();
  }

  /**
     * Handles adding a new expense.
     */
  handleAddExpense() {
    const name = this.expenseNameInput.val();
    const amount = parseFloat(this.expenseAmountInput.val());
    const category = this.expenseCategorySelect.val();
    const date = new Date().toLocaleDateString();

    if (name && amount && category) {
      const expense = { name, amount, category, date };
      addExpense(expense);
      this.addExpenseToTable(expense);
      updateChart();
      this.clearForm();
    } else {
      alert('Please fill in all fields.');
    }
  }

  /**
     * Loads expenses from storage and displays them.
     */
  loadExpenses() {
    const expenses = getExpenses();
    expenses.forEach((expense) => this.addExpenseToTable(expense));
  }

  /**
     * Adds an expense row to the table.
     * @param {Object} expense - The expense to display.
     */
  addExpenseToTable(expense) {
    const row = $('<tr>');
    row.append(`<td>${expense.name}</td>`);
    row.append(`<td>${expense.amount.toFixed(2)}</td>`);
    row.append(`<td>${expense.category}</td>`);
    row.append(`<td>${expense.date}</td>`);
    this.expensesTableBody.append(row);
  }

  /**
     * Clears the expense form inputs.
     */
  clearForm() {
    this.expenseNameInput.val('');
    this.expenseAmountInput.val('');
    this.expenseCategorySelect.val('');
  }
}
