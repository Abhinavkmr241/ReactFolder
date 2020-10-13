import React from 'react';
import './App.css';
import Display from './components/Display';
import FolderData from './components/FolderData'
import 'bootstrap/dist/css/bootstrap.css';
import { DataProvider } from './components/DataContext';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Display />
        <FolderData />
      </div>
    </DataProvider>
  );
}

export default App;
