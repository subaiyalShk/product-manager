import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';
import IndexView from './views/IndexView';
import CreateView from './views/create';
import DetailView from './views/detail';
import EditView from './views/edit';



function App() {
  return (
    <div>
      <Router>
        <IndexView path="/" />
        <CreateView path="/create" />
        <DetailView path="/:id" />
        <EditView path="/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
