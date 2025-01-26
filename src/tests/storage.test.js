import { describe, it, expect, beforeEach } from 'vitest';
import { getExpenses, saveExpenses, addExpense } from '../storage.js';

describe('Storage Module', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should return an empty array when no expenses are saved', () => {
    expect(getExpenses()).toEqual([]);
  });

  it('should save and retrieve expenses', () => {
    const expenses = [
      { name: 'Coffee', amount: 3.5, category: 'Food', date: '01/01/2021' }
    ];
    saveExpenses(expenses);
    expect(getExpenses()).toEqual(expenses);
  });

  it('should add an expense to storage', () => {
    const expense = {
      name: 'Movie',
      amount: 12,
      category: 'Entertainment',
      date: '01/02/2021'
    };
    addExpense(expense);
    expect(getExpenses()).toEqual([expense]);
  });
});
