import './style.css';
import getData from './api.js';


const inputForm = document.getElementById('input-form');
inputForm.addEventListener('submit', getData, false);
