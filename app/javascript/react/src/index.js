import { define } from 'remount'
import Names from "./components/Names"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

define({ 'names-component': { component: Names, attributes: ['names'] }})
