import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/Store';
import App from './App';
import { createRoot } from 'react-dom/client';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
