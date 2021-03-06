import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import {loadCourses} from "./actions/courseAction";
import {loadAuthors} from "./actions/authorActions";
import './styles/styles.css'; // webpack can also import css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import {loadPipes} from "./actions/pipeActions";
import {loadInputs} from "./actions/inputsActions";
import { loadChartData } from './actions/chartActions';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());
store.dispatch(loadPipes());
store.dispatch(loadInputs());
store.dispatch(loadChartData());

render(
  // provider wrap around container means we can access store from these comps
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
