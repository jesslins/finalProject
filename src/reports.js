import { getExpenses } from './storage.js';
import $ from 'jquery';
import { Chart, PieController, ArcElement, Tooltip, Legend } from 'chart.js';
Chart.register(PieController, ArcElement, Tooltip, Legend);

export class Reports {
  constructor() {
    this.chart = null;
    this.init();
  }

  init() {
    const ctx = $('#category-chart')[0].getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: [],
        datasets: [{
          label: 'Spending by Category',
          data: [],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {}
    });

    this.updateChart();
  }

  /**
     * Updates the chart data based on current expenses.
     */
  updateChart() {
    const expenses = getExpenses();
    const categoryTotals = {};

    expenses.forEach((expense) => {
      if (!categoryTotals[expense.category]) {
        categoryTotals[expense.category] = 0;
      }
      categoryTotals[expense.category] += expense.amount;
    });

    this.chart.data.labels = Object.keys(categoryTotals);
    this.chart.data.datasets[0].data = Object.values(categoryTotals);
    this.chart.update();
  }
}

let reportsInstance = null;

/**
 * Initializes the Reports instance.
 */
export function initReports() {
  reportsInstance = new Reports();
}

/**
 * Updates the chart using the existing Reports instance.
 */
export function updateChart() {
  if (reportsInstance) {
    reportsInstance.updateChart();
  }
}
