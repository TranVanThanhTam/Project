import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import AuthBaseLayout from './component/layout/AuthBaseLayout/AuthBaseLayout';
import PrivateRouter from './component/layout/PrivateRouter';
import { store } from './redux/Store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <AuthBaseLayout/>
        <PrivateRouter/>
      </Provider>
    </div>
  );
}

export default App;
