import { Reports } from '../reports.js';
import * as storageModule from '../storage.js';
import { describe, it, expect, beforeEach, vi } from 'vitest';

vi.mock('chart.js', () => {
  const Chart = vi.fn(() => ({
    data: {
      labels: [],
      datasets: [{ data: [] }]
    },
    update: vi.fn()
  }));

  Chart.register = vi.fn();
  const PieController = vi.fn();
  const ArcElement = vi.fn();
  const Tooltip = vi.fn();
  const Legend = vi.fn();

  return {
    Chart,
    PieController,
    ArcElement,
    Tooltip,
    Legend
  };
});
vi.mock('../storage.js');

describe('Reports Module', () => {
  beforeEach(() => {
    document.body.innerHTML = '<canvas id="category-chart"></canvas>';
    storageModule.getExpenses.mockReturnValue([
      { amount: 10, category: 'Food' },
      { amount: 20, category: 'Transport' },
      { amount: 15, category: 'Food' }
    ]);
  });

  it('should initialize chart with correct data', () => {
    const reports = new Reports();

    const expectedLabels = ['Food', 'Transport'];
    const expectedData = [25, 20];

    expect(reports.chart.data.labels).toEqual(expectedLabels);
    expect(reports.chart.data.datasets[0].data).toEqual(expectedData);
  });

  it('should update chart data correctly', () => {
    const reports = new Reports();

    // Update mock data
    storageModule.getExpenses.mockReturnValue([
      { amount: 5, category: 'Utilities' },
      { amount: 15, category: 'Food' }
    ]);

    reports.updateChart();

    const expectedLabels = ['Utilities', 'Food'];
    const expectedData = [5, 15];

    expect(reports.chart.data.labels).toEqual(expectedLabels);
    expect(reports.chart.data.datasets[0].data).toEqual(expectedData);
  });
});
