import { UI } from './ui.js';
import { initReports } from './reports.js';
import $ from 'jquery';

$(document).ready(() => {
  new UI();
  initReports();
});
