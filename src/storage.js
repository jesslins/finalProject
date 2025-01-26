const STORAGE_KEY = 'expenses';

/**
 * retrieves the list of expenses from local storage.
 */
export function getExpenses() {
  const expenses = localStorage.getItem(STORAGE_KEY);
  return expenses ? JSON.parse(expenses) : [];
}

/**
 * saves the list of expenses to local storage.
 */
export function saveExpenses(expenses) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
}

/**
 * adds a new expense to the list and saves it.
 */
export function addExpense(expense) {
  const expenses = getExpenses();
  expenses.push(expense);
  saveExpenses(expenses);
}
