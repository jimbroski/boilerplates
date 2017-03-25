import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/app.scss';

// Global
import './layout';

// Load Page Specific Module
let current_page = document.querySelector('[data-page]').getAttribute('data-page');

import * as pages from './pages';
pages[current_page]().init();
