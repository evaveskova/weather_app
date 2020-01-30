import './style.css';
import getData from './api';


const inputForm = document.getElementById('input-form');
inputForm.addEventListener('submit', getData, false);
