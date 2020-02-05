import './style.css';
import getData from './api';


const inputForm = document.getElementById('input-form');
inputForm.addEventListener('submit', getData, false);

const unitSelect = document.getElementById('temp-dropdown');
unitSelect.addEventListener('change', getData, false);
