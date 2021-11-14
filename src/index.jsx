import React from 'react';
import { render } from 'react-dom';
import './style.css';
import {smartHomeData} from './smartHomeData';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

const App = () => (
  <>
    <div className="container">
    <Header />
    <Dashboard data={smartHomeData} />
    </div>
  </>
);

render(<App />, document.querySelector('#app'));
